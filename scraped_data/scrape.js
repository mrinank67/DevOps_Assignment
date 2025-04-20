import puppeteer from "puppeteer-core";
import fs from "fs/promises";

const SCRAPE_URL = process.env.SCRAPE_URL;

const CHROME_PATH = "/usr/bin/chromium";

if (!SCRAPE_URL) {
  console.error("Error: SCRAPE_URL environment variable not set.");
  process.exit(1);
}

(async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: CHROME_PATH,
    });

    const page = await browser.newPage();

    await page.goto(SCRAPE_URL, { waitUntil: "domcontentloaded" });

    const scrapedData = await page.evaluate(() => {
      const title = document.title || null;
      const firstHeading = document.querySelector("h1")?.innerText || null;
      return { title, firstHeading };
    });

    await fs.writeFile(
      "scraped_data.json",
      JSON.stringify(scrapedData, null, 2),
      "utf-8"
    );

    console.log("Scraping complete. Data saved to scraped_data.json.");
  } catch (err) {
    console.error("Scraping failed:", err);
  } finally {
    if (browser) await browser.close();
  }
})();
