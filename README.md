![bing-indexnow](https://socialify.git.ci/xiaozhu2007/bing-indexnow/image?description=1&descriptionEditable=A%20Node.js%20module%20for%20submitting%20your%20sitemap%20to%20Bing%27s%20IndexNow%20service.&font=Jost&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Auto)

<p align="center">
  <img
    src="https://img.shields.io/github/last-commit/xiaozhu2007/bing-indexnow.svg?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/issues-pr-closed/xiaozhu2007/bing-indexnow.svg?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/commit-activity/w/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <br />
  <img
    src="https://img.shields.io/github/languages/code-size/xiaozhu2007/bing-indexnow.svg?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/repo-size/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/languages/count/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/languages/top/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/issues/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/github/issues-closed-raw/xiaozhu2007/bing-indexnow?style=for-the-badge"
  />
  <img
    src="https://img.shields.io/npm/v/%40xiaozhu2007%2Fbing-indexnow?style=for-the-badge"
  />
  <br />
  ⭐️ Your Star is very important for me!
</p>

# Bing IndexNow Sitemap Submission 🌟

This is a Node.js module for submitting your sitemap to Bing's IndexNow service.

## Installation 📦

```bash
npm install @xiaozhu2007/bing-indexnow
```
## Usage 🚀

You need to provide your own Bing IndexNow API key when calling the `submitSitemapToBing` function:

```js
const { submitSitemapToBing } = require('@xiaozhu2007/bing-indexnow');

// Replace with your Bing IndexNow API key
const apiKey = 'your-api-key-here';

// Replace with your sitemap URL
const sitemapUrl = 'https://example.com/sitemap.xml';

submitSitemapToBing(sitemapUrl, apiKey)
  .then(() => console.log('Sitemap submitted successfully.'))
  .catch(err => console.error('Failed to submit sitemap:', err));
```
## Contribution 🤝

If you have any questions or suggestions, feel free to open an Issue or submit a Pull Request. Thanks for your contribution!

## License 📄

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
