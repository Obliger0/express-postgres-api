// File: job-portal-server/routes/application.routes.js
const express = require('express');
const router = express.Router();
const { applyJob, updateStatus, getJobApplications, getUserApplications } = require('../controllers/application.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/', authenticate, applyJob);
router.patch('/:id/status', authenticate, updateStatus);
router.get('/', authenticate, getUserApplications);
router.get('/:jobId', authenticate, getJobApplications);

module.exports = router;
