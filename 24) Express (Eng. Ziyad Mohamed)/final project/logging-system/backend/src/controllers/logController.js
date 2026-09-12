const Log = require("../models/Log");
const { Op } = require("sequelize");

// CREATE LOG
const createLog = async (req, res) => {
  try {
    const { level, message, source, metadata } = req.body;

    const log = await Log.create({
      level,
      message,
      source,
      metadata,
      projectId: req.project.id,
    });

    res.status(201).json({
      message: "Log created",
      log,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET LOGS
const getLogs = async (req, res) => {
  try {
    const {
      projectId,
      level,
      search,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = req.query;

    const whereClause = {};

    if (projectId) whereClause.projectId = projectId;
    if (level) whereClause.level = level;

    if (search) {
      whereClause.message = {
        [Op.like]: `%${search}%`,
      };
    }

    if (startDate && endDate) {
      whereClause.createdAt = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    const offset = (page - 1) * limit;

    const logs = await Log.findAndCountAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.status(200).json({
      total: logs.count,
      page: parseInt(page),
      pages: Math.ceil(logs.count / limit),
      logs: logs.rows,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLog,
  getLogs,
};