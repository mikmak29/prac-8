import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";
import * as userServices from "../services/user.service.js";

dotenv.config();

export const userRegister = asyncErrorHandler(async (req, res) => {
	const { name, email, password, country } = req.body;

	if (!name || !email || !password || !country) {
		conditionalErrorHandler("Fields are required to fill.", 404);
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const data = {
		name,
		email,
		password: hashedPassword,
		country,
	};

	console.log({
		name,
		email,
		plainPassword: password,
		hashedPassword: hashedPassword,
		country,
	});

	const user = await userServices.register(data);
	res.status(200).send(user);
});

export const userLogIn = asyncErrorHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		conditionalErrorHandler("Invalid Email or Password.", 409);
	}

	const user = await userServices.logIn({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		const accessToken = jwt.sign(
			{
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					country: user.country,
				},
			},
			process.env.PRIVATE_USER_TOKEN_KEY,
			{ expiresIn: "5m" }
		);

		res.cookie("weather-cookie", accessToken, {
			httpOnly: true, // JS cannot access (prevents XSS)
			secure: true, // HTTPS only (set false for local dev)
			sameSite: "strict", // CSRF protection
			maxAge: 24 * 60 * 60 * 1000, // 1 day
		});
		res.status(200).send({ token: accessToken });
	} else {
		res.status(401).send("Unauthorized email or password");
	}
});

export const userCurrent = asyncErrorHandler(async (req, res) => {
	console.log("req hearders", req.headers.Authorization);
	console.log("req hearders", req.headers.authorization);
	const currentData = req.user;
	res.status(200).send(currentData);
});
