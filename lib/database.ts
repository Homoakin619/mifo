import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
    mongoose.set('strictQuery',true)
    if (isConnected) {
        console.log("MongoDB is connected");
    }
    try {
        {/* @ts-expect-error */}
        mongoose.connect(process.env.MONGODB_URI,{
           dbName: "mahbub_foundation",
           useNewUrlParser: true,
           useUnifiedTopology: true
        })
    } catch (error) {
        
    }
}