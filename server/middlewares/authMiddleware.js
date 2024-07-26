const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  let token;

  // Hardcoded JWT secret for testing purposes
  const hardcodedSecret = 'b887b8e65f944130f64345a7d3c4744a79b8aa85d9b2258e45ddfd383546dc54';

  // Log all headers for debugging
  console.log('Incoming Headers:', req.headers);

  // Check if an authorization header exists and starts with 'Bearer'
  if (req.headers.authorization) {
    console.log('Authorization header found:', req.headers.authorization);

    if (req.headers.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1]; // Extract the token from the header
        console.log('Token:', token);

        const decoded = jwt.verify(token, hardcodedSecret); // Verify the token with the hardcoded secret
        req.user = decoded; // Attach user data to the request object
        console.log('Decoded JWT:', req.user);  // Log decoded token for debugging

        next(); // Proceed to the next middleware
      } catch (error) {
        // Handle errors related to token verification (such as expiration or tampering)
        console.error('Not authorized, token failed:', error.message);
        res.status(401).json({ message: 'Not authorized, token failed', error: error.message });
      }
    } else {
      console.error('Authorization header does not start with Bearer');
      res.status(401).json({ message: 'Not authorized, token format invalid' });
    }
  } else {
    // Handle cases where no token is present
    console.error('No authorization header provided');
    res.status(401).json({ message: 'No token provided, authorization denied' });
  }
};

module.exports = authMiddleware;

