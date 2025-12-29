import express from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import * as userController from "../controllers/user.controller.js";
import userSchemaValidator from "../schema/user.schema.js";
import { validateToken } from "../validations/validateToken.js";

const route = express.Router();

route.route("/register").post(expressYupMiddleware({ schemaValidator: userSchemaValidator }), userController.userRegister);
route.route("/login").post(userController.userLogIn);
route.route("/current").get(validateToken, userController.userCurrent);

export default route;
