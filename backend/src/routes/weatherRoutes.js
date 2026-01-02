import express from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import * as weatherController from "../controllers/weather.controller.js";
import weatherSchemaValidator from "../schema/weather.schema.js";

const route = express.Router();

route.post("/", expressYupMiddleware({ schemaValidator: weatherSchemaValidator }), weatherController.searchPlace);
route.get("/data", weatherController.fetchSearchedHistory);
route.get("/:id", weatherController.searchExistingPlace);

export default route;
