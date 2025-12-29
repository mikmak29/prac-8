import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema(
	{
		country: {
			type: String,
		},
		location: {
			name: {
				type: String,
			},
			region: {
				type: String,
			},
			country: {
				type: String,
			},
			localtime: {
				type: String,
			},
		},
		current: {
			temp_fahrenheit: {
				type: Number,
			},
			condition: {
				text: {
					type: String,
				},
			},
			humidity: {
				type: Number,
			},
			cloud: {
				type: Number,
			},
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.models.Weather || mongoose.model("Weather", weatherSchema, "prac8_weather");
