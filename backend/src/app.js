import "./config/loadEnv.js";
import "./models/index.js";

import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.listen(SERVER_PORT, () =>
  console.log(`🚀 Server running on port ${SERVER_PORT}`)
);
