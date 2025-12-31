import dotenv from "dotenv";
import asyncErrorHandler from "express-async-handler";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";

dotenv.config();

const weatherAPI = asyncErrorHandler(async (reqCountry) => {
	const API_KEY = process.env.PRIVATE_WEATHER_TOKEN_KEY;
	const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${reqCountry}&aqi=no`);
	const data = await response.json();

	if (!response.ok) {
		conditionalErrorHandler("Couldn't fetch data", 409);
	}

	const {
		location: { country, region, localtime },
		current: {
			temp_f,
			condition: { text },
			humidity,
			cloud,
		},
	} = data;

	return {
		location: { country, region, localtime },
		current: {
			temp_f,
			condition: { text },
			humidity,
			cloud,
		},
	};
});

export default weatherAPI;
