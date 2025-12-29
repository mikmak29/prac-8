import asyncErrorHandler from "express-async-handler";
import conditionalErrorHandler from "../helper/conditionalErrorHandler.js";
import { validateObjectId } from "../helper/validateObjectId.js";

import weatherAPI from "../api/weatherAPI.js";
import * as weatherServices from "../services/weather.services.js";

export const searchPlace = asyncErrorHandler(async (req, res) => {
	const { place, storedData } = req.body;

	if (!place || !storedData) {
		conditionalErrorHandler("Fields are mandatory to fill.", 404);
	}

	const requestPlace = await weatherAPI(place);

	if (storedData === "true") {
		const weatherData = await weatherServices.searchLocationWeather(requestPlace);
		res.status(200).send({ Saved: weatherData });
	} else {
		res.status(200).send({ Not_save: requestPlace });
	}
});

export const fetchSearchedHistory = asyncErrorHandler(async (req, res) => {
	const weatherData = await weatherServices.fetchSearchedHistory();
	res.status(200).send(weatherData);
});

export const searchExistingPlace = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;

	if (!id) {
		conditionalErrorHandler("Fields are mandatory to fill.", 404);
	}

	validateObjectId(id);

	const place = await weatherServices.searchExistingPlace(id);

	res.status(200).send(place);
});
