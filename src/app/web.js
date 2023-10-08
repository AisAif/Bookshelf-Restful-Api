import express from "express";
import cors from "cors"
import errorMiddleware from "../middleware/error-middleware.js";
import publicApi from "../routes/public-api.js";

const web = express()

web.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}))
web.use(express.json())
web.use(publicApi)
web.use(errorMiddleware)

export default web