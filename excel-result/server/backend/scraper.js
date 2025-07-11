const { chromium } = require("playwright");

async function fetchResult(registerNo, dob) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log("🌐 Navigating to homepage...");
    await page.goto("http://103.105.40.112", { timeout: 60000 });
    console.log("✅ Homepage loaded");

    console.log("🔐 Clicking Student Login...");
    await page.click('a[href="/students/"]');
    await page.waitForLoadState("domcontentloaded");

    console.log("📝 Logging in...");
    await page.fill("#txtLoginId", registerNo);
    await page.fill("#txtPassword", dob);
    await page.click('input[value="Login"]');

    console.log("🧭 Waiting for iframe to appear...");
    await page.waitForSelector("iframe", { timeout: 10000 });

    const frameHandle = await page.$("iframe");
    const frame = await frameHandle.contentFrame();

    console.log("📄 Extracting rows...");
    const allRows = await frame.evaluate(() => {
      const rows = Array.from(document.querySelectorAll("table.tblBRDefault tr"));
      return rows.slice(1).map(row => {
        const cols = row.querySelectorAll("td");
        return {
          sem: cols[0]?.innerText.trim(),
          code: cols[1]?.innerText.trim(),
          subject: cols[2]?.innerText.trim(),
          credit: cols[3]?.innerText.trim(),
          grade: cols[4]?.innerText.trim(),
          point: cols[5]?.innerText.trim(),
          result: cols[6]?.innerText.trim()
        };
      });
    });

    // 🎯 Keep only valid subject rows
    const subjectRows = allRows.filter(r =>
      r.subject && r.code && r.grade &&
      !isNaN(parseFloat(r.credit)) &&
      !isNaN(parseFloat(r.point))
    );

    // 📌 Determine latest semester
    const allSems = subjectRows.map(r => parseInt(r.sem)).filter(n => !isNaN(n));
    const lastSem = Math.max(...allSems);

    // 📘 Filter only last semester
    const lastSemResults = subjectRows.filter(r => parseInt(r.sem) === lastSem);

    // 🧮 Calculate CGPA
    const totalPoints = lastSemResults.reduce((acc, row) => acc + parseFloat(row.credit) * parseFloat(row.point), 0);
    const totalCredits = lastSemResults.reduce((acc, row) => acc + parseFloat(row.credit), 0);
    const cgpa = totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);

    console.log(`🎓 CGPA for Semester ${lastSem}: ${cgpa}`);

    await browser.close();
    return {
      cgpa,
      lastSem,
      subjects: lastSemResults
    };

  } catch (err) {
    console.error("❌ Scraper failed:", err.message);
    await browser.close();
    return null;
  }
}

module.exports = fetchResult;
