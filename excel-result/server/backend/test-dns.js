const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set to false to see it
  const page = await browser.newPage();

  try {
    console.log("🧭 Navigating to your college homepage...");
    await page.goto('http://103.105.40.112', { timeout: 60000, waitUntil: "load" });

    console.log("📸 Taking screenshot...");
    await page.screenshot({ path: 'playwright-homepage.png' });
    console.log("✅ Screenshot saved as playwright-homepage.png");

  } catch (err) {
    console.error("❌ Failed to load page:", err.message);
  } finally {
    await browser.close();
  }
})();
