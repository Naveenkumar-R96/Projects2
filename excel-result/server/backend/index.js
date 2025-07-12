require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const fetchResult = require("./scraper");
const sendTelegramMessage = require("./telegram");
const sendEmail = require("./mailer");
const students = require("../data/students");
const mongoose = require("mongoose");
const userRoutes = require("../routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

app.use("/api/users", userRoutes);

let notified = {}; // { regNo: true }

cron.schedule("* * * * *", async () => {
  console.log("🕒 Checking for results...");

  await Promise.all(
    students.map(async (student) => {
      try {
        if (notified[student.regNo]) return;

        const result = await fetchResult(student.regNo, student.dob);

        if (result && result.subjects?.length) {
          const formatted = result.subjects.map(r =>
            `${r.sem} | ${r.code} | ${r.subject} | ${r.grade} (${r.result})`
          ).join("\n");

          const message = `🎓 RESULT PUBLISHED\n👤 ${student.name} (${student.regNo})\n📘 Semester: ${result.lastSem}\n📊 CGPA: ${result.cgpa}\n\n${formatted}`;

          // 1. Send Telegram to you
          await sendTelegramMessage(message);

          // 2. Send Email to student
          const emailHtml = require("./emialHtml")(result);
          await sendEmail(student.email, "🎓 Your Result is Published", emailHtml);

          notified[student.regNo] = true;
          console.log(`✅ Notification sent for ${student.name}`);
        } else {
          console.log(`⏳ No result for ${student.name}`);
        }
      } catch (err) {
        console.error(`❌ Error for ${student.name}:`, err.message);
      }
    })
  );
});

app.get("/", (_, res) => res.send("✅ Result checker is running"));
app.listen(3001, () => console.log("🚀 Backend running on port 3001"));
