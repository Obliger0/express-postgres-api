// File: job-portal-server/middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret';

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    req.user = jwt.verify(token, secret);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = { authenticate, secret };
