import express from "express";

import * as weatherController from "../controllers/weather.controller.js";

const route = express.Router();

route.get("/", weatherController.fetchSearchedHistory);
route.post("/", weatherController.searchPlace);

export default route;
