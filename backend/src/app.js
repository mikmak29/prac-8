import helmet from "helmet";
import cors from "cors";
import express from "express";

import limiter from "./helper/handleLimitRequest.js";
import userRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

export default app;
