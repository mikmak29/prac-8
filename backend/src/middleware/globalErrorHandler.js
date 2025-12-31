import { STATUS_CODE } from "../constant/STATUS_CODE.js";

export const globalErrorHandler = (err, req, res, next) => {
	// Prevent sending response if headers already sent
	if (res.headersSent) {
		return next(err);
	}

	const status = err.statusCode || err.status || 500;

	const errorMap = {
		400: STATUS_CODE.VALIDATION_ERROR,
		401: STATUS_CODE.UNAUTHORIZED,
		403: STATUS_CODE.FORBIDDEN,
		404: STATUS_CODE.NOT_FOUND,
		409: STATUS_CODE.CONFLICT,
	};

	const error = errorMap[status] || STATUS_CODE.SERVER_ERROR;

	res.status(status).json({
		status: error.statusCode,
		message: error.title,
		errorStack: err.stack,
	});
};
