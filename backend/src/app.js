import "./config/loadEnv.js";
import "./models/index.js";

import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ✅ CORS 설정 (withCredentials: true와 함께 사용 가능)
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ 프론트엔드 도메인 지정
    credentials: true, // ✅ 쿠키/인증 정보를 포함하도록 설정
  })
);

app.use(json());
app.use(cookieParser());

import userRoutes from "./routes/userRoutes.js";
import chatRoomRoutes from "./routes/chatRoomRoutes.js"; // ✅ 채팅방 API 추가

app.use("/api/users", userRoutes);
app.use("/api/chatRoomList", chatRoomRoutes); // ✅ 채팅방 리스트 엔드포인트 추가

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.listen(SERVER_PORT, () =>
  console.log(`🚀 Server running on port ${SERVER_PORT}`)
);
