import express from "express"
import router from "./routes/app.js"
import { connectMongo } from "./db/db.js"
import dotenv from "dotenv"
dotenv.config()


const PORT = process.env.MY_PORT
const app = express()

connectMongo();

app.use(express.urlencoded({extended:true}),express.json({limit:"16kb"}))

app.use("/", router);

app.get("/", (req, res) => { res.send("Hello ffrom the other SYYYYYYYYIIIIIIDE!!!") })

app.listen(PORT, () => {
    console.log(`✅Server is listening at http://localhost:${PORT}`);
})