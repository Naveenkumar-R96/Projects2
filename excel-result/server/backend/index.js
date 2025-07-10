require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const fetchResult = require("./scraper");
const sendTelegramMessage = require("./telegram");

const app = express();
let alreadyNotified = false;

app.use(cors()); 

cron.schedule("* * * * *", async () => {
  try {
    console.log("ENV Loaded:", process.env.REGISTER_NO, process.env.DOB);
    console.log("Checking for result...");
    const result = await fetchResult(process.env.REGISTER_NO, process.env.DOB);

    if (result && result.length && !alreadyNotified) {
      const formatted = result.map(r =>
        `${r.sem} | ${r.code} | ${r.subject} | ${r.grade} (${r.result})`
      ).join("\n");

      await sendTelegramMessage(`🎓 RESULT PUBLISHED:\n\n${formatted}`);
      alreadyNotified = true;
    }
  } catch (err) {
    console.error("Error checking result:", err.message);
  }
});

app.get("/", (_, res) => res.send("Result checker running"));
app.listen(3001, () => console.log("Backend running on port 3001"));
