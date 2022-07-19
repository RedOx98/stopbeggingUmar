import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
dotenv.config();
import authRoute from "./route/auth.js";
import usersRoute from "./route/users.js";
import deliveryRoute from "./route/delivery.js";
import paystackRoute from "./route/paystack.js";
import flutterRoute from "./route/flutter.js";
import vehincleRoute from "./route/vehincle.js";
import cookieParser from "cookie-parser";

const connect = async () =>{

try {
    await mongoose.connect(process.env.MONGO);
} catch (error) {
    throw error
}
}
mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB connected");
});


app.use(cookieParser());
app.use((err, req, res, next) => {
    
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/vehincles", vehincleRoute);
app.use("/api/users", usersRoute);
app.use("/api/delivery", deliveryRoute);
app.use("/api/paystack", paystackRoute);
app.use("/api/flutter", flutterRoute);

app.listen(5000, ()=> {
    connect();
    console.log("Connected to the backend.");
});