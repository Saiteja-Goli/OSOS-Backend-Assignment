// authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Authentication token missing" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.userId = decodedToken.userId;
        next();
    });
};
