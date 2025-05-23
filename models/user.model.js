// File: job-portal-server/models/user.model.js
module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('User', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.ENUM('recruiter', 'applicant'), allowNull: false },
    });
  };
  