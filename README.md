```markdown
# Puppeteer Web Scraper

This is a simple web scraping script built with [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) that navigates to a given URL, extracts the page title and the first `<h1>` heading, and saves the data to a JSON file.

---

## 📁 Project Structure

```
.
├── scrape.js            # Main script for scraping
├── scraped_data.json    # Output file with scraped data (generated after run)
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

---

## 🧰 Prerequisites

- **Node.js v22** or higher
- **Chromium installed manually** (used with `puppeteer-core`)

> You can install Chromium via Puppeteer's CLI:
> ```bash
> npx puppeteer browsers install chrome
> ```

Then find the path to the Chrome binary:
```bash
find ~/.cache/puppeteer -name chrome -type f
```

---

## ⚙️ Setup

1. **Clone the repository** (or copy the files).
2. **Install dependencies:**
   ```bash
   npm install
   ```

> Make sure you're using the correct `package.json` with `puppeteer-core` as a dependency.

---

## 🛠️ Configuration

In the `scrape.js` file, you need to update the hardcoded path to Chromium:

```js
const CHROME_PATH = '/home/your-username/.cache/puppeteer/chrome/linux-127.0.6533.88/chrome-linux64/chrome';
```

Replace the path with the actual location of your local Chromium binary.

---

## 🚀 Run Instructions

### Supply the URL to scrape using an environment variable:

```bash
SCRAPE_URL="https://example.com" node scrape.js
```

---

## 📦 Output

After a successful run, the script will generate a file:

```bash
scraped_data.json
```

Example output:
```json
{
  "title": "Example Domain",
  "firstHeading": "Example Domain"
}
```

---

## 🧼 Clean Up

To remove the output file:
```bash
rm scraped_data.json
```

---

## 📝 Notes

- This project uses `puppeteer-core`, so it does **not download Chromium automatically**.
- If you want a version that handles Chromium internally, consider switching to the full `puppeteer` package.

---

## 📄 License

MIT
```

---
