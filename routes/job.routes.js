// File: job-portal-server/routes/job.routes.js
const express = require('express');
const router = express.Router();
const { createJob, getAllJobs, getJob } = require('../controllers/job.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/', authenticate, createJob);
router.get('/', getAllJobs);
router.get('/:jobId', getJob);

module.exports = router;
