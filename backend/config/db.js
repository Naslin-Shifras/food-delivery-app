import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://naslinshifras:20010107@cluster0.bqfhzor.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}