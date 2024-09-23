import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";

async function fetchAndSaveHTML(url) {
  // Proxy credentials

  // // Create the proxy agent
  // const agent = new HttpsProxyAgent(proxyUrl);
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Optionally disable SSL cert check

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url, // The URL to fetch
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br, zstd",
    },
    // Use the HTTPS proxy agent
    // httpsAgent: agent,
  };

  try {
    const response = await axios.request(config);
    // console.log(`Random session number: ${proxySession}`);
    console.log(`HTTP Status: ${response.status}`);

    // Write the response data (HTML content) to the specified file
    // await fs.writeFil, response.data);
    if (response.status === 200) {
      const data = response.data;
      console.log("Data:", data);
      return {data, status : 200};
    } else if (response.status === 202) {
      return 202;
    } else {
      return response.status;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example of calling the function
export default fetchAndSaveHTML;