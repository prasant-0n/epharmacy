import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("API IS RUNNING...");
})


app.listen(process.env.PORT,()=>{
    console.log(`{App is running in the PORT- ${process.env.NODE_ENV}}`)
})