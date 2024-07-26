const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  let token;

  console.log('Authorization Header:', req.headers.authorization);

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log('Decoded JWT:', req.user);
      next();
    } catch (error) {
      console.error('Not authorized, token failed:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.error('No token provided, authorization denied');
    res.status(401).json({ message: 'No token provided, authorization denied' });
  }
};

module.exports = authMiddleware;

