const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully");
    }catch(error){
        console.log("❌ MongoDB Connection Failed:", error.message);

    }
}

module.exports= connectDB