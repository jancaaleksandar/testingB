import axios from "axios";

const url = "https://www.booking.com/hotel/de/hilton-berlin.en-gb.html?checkin=2024-11-03&checkout=2024-11-04&group_adults=2&req_adults=2&no_rooms=1";
const requestCount = 1000;
let successCount = {};
let errorCount = {};

const makeRequest = async () => {
  const data = JSON.stringify({ url });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://2ms3jfpxdtc5lpgorjhkdcl3tu0szcxr.lambda-url.eu-west-1.on.aws/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  };

  try {
    const response = await axios.request(config);
    const statusCode = response.status;
    successCount[statusCode] = (successCount[statusCode] || 0) + 1;
    console.log(`Response: ${statusCode}`, response.data);
  } catch (error) {
    const statusCode = error.response ? error.response.status : 'Network Error';
    errorCount[statusCode] = (errorCount[statusCode] || 0) + 1;
    console.log(`Error: ${statusCode}`, error.message);
  }
};

const runRequests = async () => {
  const promises = [];
  
  for (let i = 0; i < requestCount; i++) {
    promises.push(makeRequest());
  }

  await Promise.all(promises);
  
  console.log('Success Count:', successCount);
  console.log('Error Count:', errorCount);
};

runRequests();
