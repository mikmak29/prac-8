import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const connectDB = asyncErrorHandler(async () => {
	await mongoose.connect(MONGO_URI);
	console.log(`Database connected successfully at ${mongoose.connection.db.databaseName}`);
});

export default connectDB;
