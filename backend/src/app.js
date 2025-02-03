import "./config/loadEnv.js";
import "./models/index.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js";
import chatRoomRoutes from "./routes/chatRoomRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chatRoomList", chatRoomRoutes);

// Fallback route
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(SERVER_PORT, () => {
  console.log(`🚀 Server running on port ${SERVER_PORT}`);
});
