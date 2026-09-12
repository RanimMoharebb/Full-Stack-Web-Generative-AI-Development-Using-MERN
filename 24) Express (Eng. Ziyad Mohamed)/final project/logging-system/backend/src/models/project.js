const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  apiKey: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Project;