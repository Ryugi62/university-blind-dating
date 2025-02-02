const errorHandler = (err, _req, res) => {
  console.error("❌ 서버 에러 발생:", err);
  res.status(500).json({
    success: false,
    message: "서버 내부 오류",
    error: err.message,
  });
};

export default errorHandler;
