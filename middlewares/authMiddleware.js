const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET_KEY = process.env.SECRET_KEY;

function verifyToken(req, res, next) {
    const bearerToken = req.header("Authorization");
    if (!bearerToken)
        res.json({ message: "Access Denied" });

    try {
        // console.log("bearerToken: ", bearerToken)
        const parts = bearerToken.split(' ');
        const token = parts[1];
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        res.locals.authenticatedUser = decoded.userId
        next();
    } catch (error) {
        res.json({ message: "Invalid Token" });
    }
}

module.exports = verifyToken;