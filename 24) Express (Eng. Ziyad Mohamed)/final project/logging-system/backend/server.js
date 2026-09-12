require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/db");

require("./src/models/User");
require("./src/models/Project");
require("./src/models/Log");

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });