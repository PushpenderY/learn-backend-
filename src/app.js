import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json({limit: "16kb"})); // Middleware to parse JSON request bodies

app.use(express.urlencoded({extended: true, limit: "16kb"})); // Middleware to parse URL-encoded request bodies
app.use(express.static("public")); // Middleware to serve static files from the "public" directory

export default app;