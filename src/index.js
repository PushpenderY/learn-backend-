import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
























//require("dotenv").config({path: "./.env"}); //provides access to environment variables defined in .env file as early as possible in the application lifecycle

// import dotenv from "dotenv";

// import mongoose from "mongoose";
// import{ DB_NAME } from "./constants.js";
// import connectDB from "./db/index.js";
// // import { app } from "./app.js";

// import express from "express";
// const app = express();

// dotenv.config({path: "./.env"});

// connectDB()
// .then(  () => {
//     app.listen(process.env.PORT || 8000, () =>{
//         console.log(`App is listening on port ${process.env.PORT || 8000}`);
//     });
// })
// .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
// });





/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () =>{
            console.log("Error", error);
            throw error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`App is listining on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();

*/