require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AllRoutes = require("./Routes/AllRoute.js");

const { HoldingModel } = require('./model/HoldingModel.js')
const { PositionModel } = require('./model/PositionModel.js');
const { OrderModel } = require('./model/OrderModel.js')


const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());


app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(URL)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err);
        });
});

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use("/", AllRoutes);