const axios = require('axios');
const { parseString } = require('xml2js');

/**
 * Submits the sitemap to Bing IndexNow.
 *
 * @param {string} sitemapUrl - The URL of the sitemap.
 * @param {string} apiKey - Your Bing IndexNow API key.
 * @returns {Promise<void>}
 */
async function submitSitemapToBing(sitemapUrl, apiKey) {
  try {
    const response = await axios.get(sitemapUrl);
    if (response.status !== 200) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }

    const urls = [];
    parseString(response.data, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return;
      }

      const urlElements = result.urlset && result.urlset.url;
      if (urlElements) {
        urls.push(...urlElements.map(urlObj => urlObj.loc[0]));
      }
    });

    if (urls.length === 0) {
      console.warn('No URLs found in the sitemap.');
      return;
    }

    const body = JSON.stringify({
      host: new URL(sitemapUrl).hostname,
      key: apiKey,
      keyLocation: `https://${new URL(sitemapUrl).hostname}/${apiKey}.txt`,
      urlList: urls
    });

    const postResponse = await axios.post('https://api.indexnow.org/IndexNow', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (postResponse.status === 200) {
      console.log('Success:', postResponse.data);
    } else {
      throw new Error(`HTTP error! status: ${postResponse.status}`);
    }
  } catch (error) {
    console.error('There was an error with the fetch operation:', error.message);
  }
}

module.exports = {
  submitSitemapToBing
};