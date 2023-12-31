import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

//Cors middleware settings
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//setting configuration for accepting json data
app.use(express.json({ limit: "24kb" }));

//settings configuration for accepting URL data url encoder simplifies url data
app.use(express.urlencoded({ extended: true, limit: "24kb" }));

//Stores files folder for images etc
app.use(express.static("public"));

//this configuration is to perform crud operation on user cookies
app.use(cookieParser());

//routes

import userRouter from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/users", userRouter);

export { app };
