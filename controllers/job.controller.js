// File: job-portal-server/controllers/job.controller.js
const { Job } = require('../models');

exports.createJob = async (req, res) => {
  const job = await Job.create({ ...req.body, recruiterId: req.user.id });
  res.status(201).json(job);
};

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.findAll();
  res.json(jobs);
};

exports.getJob = async (req, res) => {
  const { jobId } = req.params;
  const jobs = await Job.findByPk(jobId);
  if (!jobs) return res.status(404).json({ message: 'Not found' });
  res.json(jobs);
};
