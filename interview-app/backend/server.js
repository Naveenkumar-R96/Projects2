require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express();

app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-Type","Authorization"],

    })
)

//Midlewares

app.use(express.json())

//Routes

//Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));

//start Server

const PORT=process.env.PORT || 5000;
app.listen( PORT,()=>console.log(`Server is runing in port ${PORT}`))