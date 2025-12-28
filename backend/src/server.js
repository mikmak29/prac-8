import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";

import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 8100;

const serverStarter = asyncErrorHandler(async (req, res) => {
	await connectDB();
	app.listen(port, () => {
		console.log(`Server is listening at port ${port}`);
	});
});

serverStarter();
