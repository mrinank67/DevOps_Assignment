
# Puppeteer Web Scraper

This is a simple web scraper built with `puppeteer-core` and `Node.js`. It navigates to a specified URL, extracts the page title and the first `<h1>` heading, and saves the data to a local JSON file.

The script is designed to be run inside a Docker container with Chromium installed, ensuring a consistent environment.

---

## Features

- Uses `puppeteer-core` (lightweight without bundled Chromium)
- Scrapes:
  - Page `<title>`
  - First `<h1>` element
- Saves output to `scraped_data.json`
- Docker-ready for containerized execution

---

## Prerequisites

Before using this project, ensure you have the following installed:

- [Docker](https://www.docker.com/) (v20+ recommended)
- (Optional) Node.js v22+ if you want to run locally outside Docker

---

## Run with Docker

### 1. Build the Docker Image

```bash
docker build -t puppeteer-scraper .
```

This will install dependencies, install Chromium inside the container, and set everything up.

---

### 2. Run the Scraper

#### Basic usage (output stays in container):

```bash
docker run --rm \
  -e SCRAPE_URL="https://example.com" \
  puppeteer-scraper
```

#### Save `scraped_data.json` to your local machine:

```bash
docker run --rm \
  -e SCRAPE_URL="https://example.com" \
  -v "$PWD:/app" \
  puppeteer-scraper
```

> This mounts your current directory into the container so the output file is saved on your local file system.

---

## Output

After running the script, you'll get a file called:

```bash
scraped_data.json
```

### Example content:

```json
{
  "title": "Example Domain",
  "firstHeading": "Example Domain"
}
```

---

## Notes

- The Chromium path is **hardcoded** in `scrape.js`. If you're modifying the Dockerfile or Chromium install path, make sure to update it there.
- If you want to run the script locally without Docker, ensure:
  - Chromium is installed
  - `puppeteer-core` is installed via `npm`
  - You pass the `SCRAPE_URL` as an environment variable

---

## License

MIT

---

## Author

Created by Mrinank Raj.

---
