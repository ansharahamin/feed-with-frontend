import mongoose from "mongoose";
import dotenv from "dotenv";

const result = dotenv.config({ debug: true });
console.log(result);
async function main() {
    try {
        console.log("URI:", process.env.MONGO_URI);
         await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to db')
    } catch (error) {
         console.log("DB connection error:", error.message);
    }
 
}
export default main
