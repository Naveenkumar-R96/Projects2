const { chromium } = require("playwright");

async function fetchResult(registerNo, dob) {
  console.log(registerNo, dob);
  const browser = await chromium.launch({ headless: true }); // set to false to debug visually
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log("🌐 Navigating to homepage...");
    await page.goto("http://103.105.40.112", { timeout: 60000 });
    console.log("✅ Homepage loaded successfully");
    await page.screenshot({ path: 'playwright-homepage.png' });

    console.log("🔐 Clicking Student Login...");
    await page.click('a[href="/students/"]');
    await page.waitForLoadState("domcontentloaded");

    console.log("🔍 entered to the studdet login");

    console.log("📝 Logging in...");
    await page.fill("#txtLoginId", registerNo);
    await page.fill("#txtPassword", dob);
    await page.click('input[value="Login"]');

    await page.waitForSelector("iframe");

    const frameHandle = await page.$("iframe");
    const frame = await frameHandle.contentFrame();

    console.log("📄 Scraping result table...");
    const result = await frame.evaluate(() => {
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

    await browser.close();
    return result;

  } catch (err) {
    console.error("❌ Scraper failed:", err.message);
    await browser.close();
    return null;
  }
}

module.exports = fetchResult;
