import asyncErrorHandler from "express-async-handler";
import weatherModel from "../model/weatherModel.js";

export const fetchSearchedHistory = asyncErrorHandler(async () => {
	return weatherModel.find();
});
