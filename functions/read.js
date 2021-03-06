const SteinStore = require("stein-js-client");
console.log("process.env.STEIN_API_URL", process.env.STEIN_API_URL);
const store = new SteinStore(process.env.STEIN_API_URL);

exports.handler = async () => {
  try {
    const data = await store.read("Sheet1", { limit: 1, offset: 2 });
    console.log(data);

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    
    return {
      statusCode: 400,
    };
  }
};
