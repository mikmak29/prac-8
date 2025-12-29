import * as Yup from "yup";
import { WEATHER } from "../constant/WEATHER.js";

const { MIN, MAX } = WEATHER;

const weatherSchemaValidator = {
	schema: {
		body: {
			yupSchema: Yup.object().shape({
				country: Yup.string().required("requiredCountryProperty").min(MIN).max(MAX),
			}),
		},
	},
	errorMessages: {
		requiredCountryProperty: {
			message: "Place is required",
		},
	},
};

export default weatherSchemaValidator;
