const validateRequest = (schema) => (req, res, next) => {
  try {
    // Validate body
    if (schema.body) {
      req.body = schema.body.parse(req.body);
    }

    // Validate query params
    if (schema.query) {
      req.query = schema.query.parse(req.query);
    }

    // Validate params
    if (schema.params) {
      req.params = schema.params.parse(req.params);
    }

    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: err.errors || err,
    });
  }
};

module.exports = validateRequest;
