FROM node:lts-slim AS scraper
WORKDIR /app
COPY ./scraped_data/* ./
RUN apt update -y && \
    apt install chromium -y && \
    PUPPETEER_SKIP_DOWNLOAD=true npm install puppeteer && \
    npm install && \
    SCRAPE_URL='https://exactspace.co' node scrape.js

FROM python:3.10.17-slim
WORKDIR /app
COPY --from=scraper /app/scraped_data.json ./
COPY ./hosting_data/* ./
RUN apt update -y && \
    pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "server.py"]