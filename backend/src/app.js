require("./config/loadEnv"); // 환경 변수 로드

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`Backend is running in ${process.env.NODE_ENV} mode`);
});

const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.listen(SERVER_PORT, () =>
  console.log(`🚀 Server running on port ${SERVER_PORT}`)
);
