import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection to database established")
    } catch (error) {
        console.error("could not connect to database", error.message);
    }
}

export default connectDB;