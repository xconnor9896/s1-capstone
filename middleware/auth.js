const jwt = require('jsonwebtoken');
require('dotenv').config();

const {UnAuthError} = require('../error')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization 

    if(!authHeader || !authHeader.startsWith(`Bearer `)) {
        throw new UnAuthError(`Not authorized to access this part of the site...`);
    }

    const token = authHeader.split(` `)[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userID: payload.userID, name: payload.name };
        next();
    } catch (err) {
        throw new UnAuthError("Authorization Invalid...");
    }
}

module.exports = authMiddleware;