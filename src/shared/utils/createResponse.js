function createResponse(res, status, message, data, meta) {
  return res.status(status || 200).json({
    message: message || "Successfully!",
    data,
    meta,
  });
}

export default createResponse;
