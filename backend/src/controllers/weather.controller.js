import asyncErrorHandler from "express-async-handler";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";

import * as weatherServices from "../services/weather.services.js";
import weatherAPI from "../api/weatherAPI.js";

export const fetchSearchedHistory = asyncErrorHandler(async (req, res) => {
	const weatherData = await weatherServices.fetchSearchedHistory();
	res.status(200).send(weatherData);
});

export const searchPlace = asyncErrorHandler(async (req, res) => {
	const { place } = req.body;

	if (!place) {
		conditionalErrorHandler("Fields are mandatory to fill.", 404);
	}

	const result = await weatherAPI(place);
	console.log(result);
	res.status(200).send(result);
});
