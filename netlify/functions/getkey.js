# netlify-functions-getkey.js
const crypto = require("crypto");

exports.handler = async () => {
  const key =
    "KEY-" +
    crypto.randomBytes(8).toString("hex").toUpperCase();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      success: true,
      key: key
    })
  };
};
