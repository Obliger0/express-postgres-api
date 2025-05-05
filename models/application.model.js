// File: job-portal-server/models/application.model.js
module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('Application', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected', 'interview', 'offered'),
        defaultValue: 'pending',
      },
      applicantId: { type: DataTypes.INTEGER, allowNull: false },
      jobId: { type: DataTypes.INTEGER, allowNull: false },
    });
  };
  