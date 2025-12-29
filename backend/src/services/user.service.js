import UserModel from "../models/UserModel.js";

export const register = async (userData) => {
	return UserModel.create(userData);
};

export const logIn = async (userData) => {
	return UserModel.findOne(userData);
};
