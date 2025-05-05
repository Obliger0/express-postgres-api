// File: job-portal-server/routes/user.routes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/user.controller');
// const { body } = require('express-validator');

router.post('/register', [
//   body('email').isEmail(),
//   body('password').isLength({ min: 6 }),
//   body('role').isIn(['recruiter', 'applicant'])
], register);

router.post('/login', login);

module.exports = router;
