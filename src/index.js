import connectDB from "./db/index.js";

//require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then((result) => {
    //LISTENING APP ON PORT AFTER CONNECTING TO DATABASE
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });
