import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected!!");

    } catch (err){
        console.error(`Error ${err.message}`);
    }
}

export default connectDB;