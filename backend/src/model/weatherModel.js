import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
	location: {
		name: {
			type: String,
			required: true,
		},
		region: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		localtime: {
			type: String,
			required: true,
		},
	},
	current: {
		temp_fahrenheit: {
			type: Number,
			required: true,
		},
		condition: {
			type: {
				type: String,
				required: true,
			},
		},
		humidity: {
			type: Number,
			required: true,
		},
		cloud: {
			type: Number,
			required: true,
		},
	},
});

export default mongoose.model.Weather || mongoose.model("Weather", weatherSchema, "prac8_weather");
