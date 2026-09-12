const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Log = sequelize.define("Log", {
  level: {
    type: DataTypes.ENUM("info", "warning", "error"),
    allowNull: false,
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  source: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  metadata: {
    type: DataTypes.JSON,
    allowNull: true,
  },

  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Log;