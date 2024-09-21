import fetchAndSaveHTML from "./config.js";
import fs from "fs";

async function test() {
  const statuses = [];
  
  for (let i = 0; i < 100; i++) {
    const proxySession = 60159; // Either use this proxySession with an session that is going to work
    // const proxySession = Math.floor(Math.random() * 100000); // or use a random session id
    const url = "https://www.booking.com/hotel/gr/gallery-residence-26.en-gb.html"; // change the url if needed

    try {
      // Call the fetchAndSaveHTML function and get the status
      const status = await fetchAndSaveHTML(proxySession, url);
      statuses.push(status); // Store the status in the array
      console.log(`Request ${i + 1}: Status ${status}`);
    } catch (error) {
      console.error(`Error on request ${i + 1}:`, error);
    }
  }

  // Save statuses to a file
   fs.writeFileSync("statuses.json", JSON.stringify(statuses, null, 2));

  // Count occurrences of each status code
  const counts = statuses.reduce((acc, status) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  console.log("Status code counts:", counts);
}

test();
