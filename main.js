import fetchAndSaveHTML from "./config.js";
import fs from "fs";

async function main(data) {
  // const proxySession = 60159; // Either use this proxySession with an session that is going to work
  // const proxySession = Math.floor(Math.random() * 100000); // or use a random session id
  try {
    // Call the fetchAndSaveHTML function and get the status
    const status = await fetchAndSaveHTML(data.url);
    // const status = await fetchAndSaveHTML(proxySession, data.url);
    // console.log(`Request ${i + 1}: Status ${status}`);
    return status;
  } catch (error) {
    return error;
  }
}

export default main;
