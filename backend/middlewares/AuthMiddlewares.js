const { UserModel } = require("../model/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ status: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        req.user = decoded; // attach user info for next middleware/route
        next(); // continue to the next handler

    } catch (err) {
        return res.status(403).json({ status: false, message: "Invalid or expired token" });
    }
};
