require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path = require("path");
const connectDB=require('./config/db')
const authRoutes=require("./routes/authRoutes")
const app = express();

app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-Type","Authorization"],

    })
)
connectDB()

//Midlewares

app.use(express.json())

//Routes

app.use("/api/auth",authRoutes);
/* app.post('/api/auth/register', (req, res) => {
    console.log(req.body); // to see incoming data in console
    res.json({ message: 'User registered successfully' });
  }); */
/* app.use("api/sessions",sessionRoutes);
app.use("api/questions",questionRoutes);
app.use("api/ai/generate-questions",protect,generateInterviewQuestions);
app.use("api/ai/generate-explanation",protect,generateConceptExplanation);
//Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{})); */

//start Server

const PORT=process.env.PORT || 5000;
app.listen( PORT,()=>console.log(`Server is runing in port ${PORT}`))