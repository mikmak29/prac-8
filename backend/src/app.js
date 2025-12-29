import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import express from "express";

import limiter from "./helper/handleLimitRequest.js";
import userRoutes from "./routes/weatherRoutes.js";
import { globalErrorHandler } from "./middleware/globalErrorHandler.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(compression());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use(globalErrorHandler);

export default app;
