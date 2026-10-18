import dotenv from "dotenv";

import dns from 'node:dns'
dns.setServers(['1.1.1.1','8.8.8.8'])
import mongoose from "mongoose";


const result = dotenv.config({ debug: true });
console.log(result);
async function main() {
    try {
        console.log(process.env.MONGO_URI)
         await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to db')
    } catch (error) {
         console.log("DB connection error:", error.message);
    }
 
}
export default main
