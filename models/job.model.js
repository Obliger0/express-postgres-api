// File: job-portal-server/models/job.model.js
module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('Job', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      recruiterId: { type: DataTypes.INTEGER, allowNull: false },
    });
  };
  