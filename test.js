import { handler as lambdaHandler } from "./lambdaHandler.js";
// const fs = require("fs");
import parseAndSaveData from "./utils/parse.js";

// Define the event object with necessary data
const event = {
    url : "https://www.httpbin.org/anything"
    // url : "https://www.booking.com/hotel/gr/gallery-residence-26.en-gb.html"
};

// Define the context object (can be an empty object if not needed)
const context = {};

// Call the handler function
lambdaHandler(event, context)
  .then((response) => {
    parseAndSaveData(response);
  })
  .catch((error) => {
    console.error("Lambda error:", error);
  });
