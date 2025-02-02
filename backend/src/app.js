import "./config/loadEnv.js";

import "./models/index.js";
import initModels from "./models/index.js";
initModels();

import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

import errorHandler from "./middlewares/errorHandler.js";
app.use(errorHandler);

app.use("/users", userRoutes);

app.get("/", (_req, res) => {
  res.send(`Backend is running in ${process.env.NODE_ENV} mode`);
});

const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.listen(SERVER_PORT, () =>
  console.log(`🚀 Server running on port ${SERVER_PORT}`)
);
