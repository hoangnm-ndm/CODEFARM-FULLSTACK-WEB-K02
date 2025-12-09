import z from "zod";

const validBodyRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body);
    next();
  } catch (error) {
    const errors = error.issues.map((item) => `${item.path}: ${item.message}`);
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Bad request",
        error: errors || "Error body request!",
      });
    }
  }
};

export default validBodyRequest;
