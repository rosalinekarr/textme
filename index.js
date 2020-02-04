require("dotenv").config();

const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN,
);

console.log(`Sending: ${process.argv.slice(2).join(" ")}`);

client.messages.create({
  body: process.argv.slice(2).join(" "),
  from: process.env.TWILIO_NUMBER,
  to:   process.env.PERSONAL_NUMBER,
});
