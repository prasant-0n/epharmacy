import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();


// Middleware to accept JSON in body
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));

connectDB();
app.get("/",(req:Request,res:Response)=>{
    res.send("API IS RUNNING...");
})

app.use("/api/users/", userRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`App is running in the PORT- ${process.env.NODE_ENV}`)
})