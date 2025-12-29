import mongoose from "mongoose";

export const validateObjectId = (id) => {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		const error = new Error(`Invalid ID format: ${id}`);
		error.statusCode = 400;
		throw error;
	}
};
