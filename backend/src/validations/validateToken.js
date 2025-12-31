import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";

dotenv.config();

export const validateToken = asyncErrorHandler(async (req, res, next) => {
	let token;
	let authHeaders = req.headers.Authorization || req.headers.authorization;

	if (!authHeaders || !authHeaders.startsWith("Bearer") || !token) {
		conditionalErrorHandler("Not Unauthorized. Please provide a token.", 401);
	}

	token = authHeaders.split(" ")[1];

	jwt.verify(token, process.env.PRIVATE_USER_TOKEN_KEY, (error, decoded) => {
		if (error) {
			return conditionalErrorHandler("Token has expired. Please login again.", 401);
		}
		req.user = decoded.user;
		console.log("User data:", req.user);
		next();
	});
});
