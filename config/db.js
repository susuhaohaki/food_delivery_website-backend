import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nguyenhai250203:hai123456@cluster0.lthj4o1.mongodb.net/food-del').then(() => console.log('DB Connected'))
}   