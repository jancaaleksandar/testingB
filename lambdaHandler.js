import main from "./main.js";

export const handler = async (event, context) => {
  let data;

  // Check if the event has a body and parse it if necessary
  if ("body" in event) {
    data = JSON.parse(event.body);
  } else {
    data = event;
  }

  try {
    const response = await main(data);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log("this is the error in the lambda handler", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
