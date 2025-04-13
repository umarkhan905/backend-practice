export const successResponse = (statusCode, message, data = null) => {
  return {
    success: true,
    message,
    statusCode,
    data,
  };
};

export const errorResponse = (
  statusCode = 500,
  message = "Internal Server Error"
) => {
  return {
    success: false,
    message,
    statusCode,
  };
};
