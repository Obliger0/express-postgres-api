// File: job-portal-server/config/db.config.js
require("dotenv").config();

module.exports = {
    DB: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    dialect: "postgres",
  };
  