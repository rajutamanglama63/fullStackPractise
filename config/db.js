const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MongoDB connection established...");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;