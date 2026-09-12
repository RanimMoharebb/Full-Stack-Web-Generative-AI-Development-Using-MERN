const Project = require("../models/Project");

const apiKeyMiddleware = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({
        message: "API key missing",
      });
    }

    const project = await Project.findOne({
      where: { apiKey },
    });

    if (!project) {
      return res.status(401).json({
        message: "Invalid API key",
      });
    }

    req.project = project;

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = apiKeyMiddleware;