export const successResponse = (res, message, data = null) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res, statusCode, message, error = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
