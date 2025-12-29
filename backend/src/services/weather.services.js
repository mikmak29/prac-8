import asyncErrorHandler from "express-async-handler";
import Weather from "../models/weatherModel.js";

export const searchLocationWeather = asyncErrorHandler(async (searchedData) => {
	return Weather.create(searchedData);
});

export const fetchSearchedHistory = asyncErrorHandler(async () => {
	return Weather.find();
});

export const searchExistingPlace = asyncErrorHandler(async (id) => {
	return Weather.findById(id);
});
