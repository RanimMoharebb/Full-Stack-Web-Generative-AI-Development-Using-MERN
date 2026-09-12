const Project = require("../models/Project");
const generateApiKey = require("../utils/generateApiKey");

// Create project
const createProject = async (req, res) => {
  try {
    const { name } = req.body;

    const apiKey = generateApiKey();

    const project = await Project.create({
      name,
      apiKey,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get user projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: { userId: req.user.id },
    });

    res.status(200).json({
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
};