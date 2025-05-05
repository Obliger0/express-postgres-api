// File: job-portal-server/controllers/application.controller.js
const { Application } = require('../models');

exports.applyJob = async (req, res) => {
  const app = await Application.create({ ...req.body, applicantId: req.user.id });
  res.status(201).json(app);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const app = await Application.findByPk(id);
  if (!app) return res.status(404).json({ message: 'Not found' });
  app.status = status;
  await app.save();
  res.json(app);
};

exports.getUserApplications = async (req, res) => {
  const jobs = await Application.findAll({where: { applicantId: req.user.id }});
  res.json(jobs);
};

exports.getJobApplications = async (req, res) => {
  const { jobId } = req.params
  const jobs = await Application.findAll({where: { jobId }});
  res.json(jobs);
};