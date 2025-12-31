import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";
import mongoose from "mongoose";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const connectDB = asyncErrorHandler(async () => {
  if (!MONGO_URI) {
    conditionalErrorHandler(
      "MongoDB connection string is missing. Please set MONGO_URL in your .env file. Example: MONGO_URL=mongodb://localhost:27017/your-database-name",
      500
    );
  }
  await mongoose.connect(MONGO_URI);
  console.log(
    `Database connected successfully at ${mongoose.connection.db.databaseName}`
  );
});

export default connectDB;
