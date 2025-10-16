import express from "express"
import {
    handleGetClicksCount,
    handleRedirectURL,
    handleShortenURL
} from '../controllers/controller.js'


const router = express.Router();

router
    .post("/URL", handleShortenURL)
    .get("/:id", handleRedirectURL)
    .get("/URL/analytics/:id", handleGetClicksCount)

export default router