import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const URI = process.env.MONGO_URI

export const connectMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDb connected✅");
    } catch (error) {
        console.log(error);
    }
}