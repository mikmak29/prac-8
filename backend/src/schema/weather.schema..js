import * as Yup from "yup";
import { WEATHER } from "../constant/WEATHER.js";

const { MIN, MAX } = WEATHER;

const weatherSchemaValidator = {
	schema: {
		body: {
			yupSchema: Yup.object().shape({
				place: Yup.string().required("requiredPlaceProperty").min(MIN).max(MAX),
			}),
		},
	},
	errorMessages: {
		requiredPlaceProperty: {
			message: "Place is required",
		},
	},
};

export default weatherSchemaValidator;
