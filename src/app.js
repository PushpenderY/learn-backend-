import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json({limit: "16kb"})); // Middleware to parse JSON request bodies

app.use(express.urlencoded({extended: true, limit: "16kb"})); // Middleware to parse URL-encoded request bodies
app.use(express.static("public")); // Middleware to serve static files from the "public" directory

//Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Chai Aur Backend",
    });
});
//route decleration
app.use("/api/v1/users", userRouter);

// http:localhost:8000/api/v1/users/register


export { app };