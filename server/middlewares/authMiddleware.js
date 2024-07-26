const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Extracted Token:', token);
      console.log('JWT_SECRET:', process.env.JWT_SECRET);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log('Decoded JWT:', req.user);
      next();
    } catch (error) {
      console.error('Not authorized, token failed:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'No token provided, authorization denied' });
  }
};

module.exports = authMiddleware;  

