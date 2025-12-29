import * as Yup from "yup";

import { USER_CHAR_LENGTH } from "../constant/USER.js";

const {
	username: { NAME_CHAR_MIN, NAME_CHAR_MAX },
	email: { EMAIL_CHAR_MIN, EMAIL_CHAR_MAX },
	password: { PASSWORD_CHAR_MIN, PASSWORD_CHAR_MAX },
	country: { COUNTRY_CHAR_MIN, COUNTRY_CHAR_MAX },
} = USER_CHAR_LENGTH;

const userSchemaValidator = {
	schema: {
		body: {
			yupSchema: Yup.object().shape({
				name: Yup.string().required("requiredNameProperty").min(NAME_CHAR_MIN).max(NAME_CHAR_MAX),
				email: Yup.string()
					.required("requiredEmailProperty")
					.matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
					.min(EMAIL_CHAR_MIN)
					.max(EMAIL_CHAR_MAX),
				password: Yup.string().required("passwordNameProperty").min(PASSWORD_CHAR_MIN).max(PASSWORD_CHAR_MAX),
				country: Yup.string().required("requiredCountryProperty").min(COUNTRY_CHAR_MIN).max(COUNTRY_CHAR_MAX),
			}),
		},
	},
	errorMessages: {
		requiredNameProperty: {
			key: "requiredNameProperty",
			message: "Name is required",
		},
		requiredEmailProperty: {
			key: "requiredEmailProperty",
			message: "Email is required",
		},
		requiredPasswordProperty: {
			key: "requiredPasswordProperty",
			message: "Password is required",
		},
		requiredCountryProperty: {
			key: "requiredCountryProperty",
			message: "Country is required",
		},
	},
};

export default userSchemaValidator;
