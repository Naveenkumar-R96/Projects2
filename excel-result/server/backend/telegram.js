const axios = require("axios");
require("dotenv").config();

async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  await axios.post(url, {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: message
  });
}

module.exports = sendTelegramMessage;
