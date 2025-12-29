import { STATUS_CODE } from "../constant/STATUS_CODE.js";

export const globalErrorHandler = (err, req, res, next) => {
	const status = err.statusCode || err.status || 500;

	switch (status) {
		case 400:
			res.status(status).json({
				status: STATUS_CODE.VALIDATION_ERROR.statusCode,
				message: STATUS_CODE.VALIDATION_ERROR.title,
			});
			break;
		case 401:
			res.status(status).json({
				status: STATUS_CODE.UNAUTHORIZED.statusCode,
				message: STATUS_CODE.UNAUTHORIZED.title,
			});
			break;
		case 403:
			res.status(status).json({
				status: STATUS_CODE.FORBIDDEN.statusCode,
				message: STATUS_CODE.FORBIDDEN.title,
			});
			break;
		case 404:
			res.status(status).json({
				status: STATUS_CODE.NOT_FOUND.statusCode,
				message: STATUS_CODE.NOT_FOUND.title,
			});
			break;
		case 409:
			res.status(status).json({
				status: STATUS_CODE.CONFLICT.statusCode,
				message: STATUS_CODE.CONFLICT.title,
			});
			break;

		default:
			res.status(status).json({
				statusCode: STATUS_CODE.SERVER_ERROR.statusCode,
				message: STATUS_CODE.SERVER_ERROR.title,
			});
			break;
	}
};
