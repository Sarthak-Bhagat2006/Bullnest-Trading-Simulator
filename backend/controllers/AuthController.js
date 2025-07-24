const { UserModel } = require("../model/UserModel.js");
const { createSecretToken } = require("../utils/SecretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, username, password, createdAt } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await UserModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User signed in successfully", success: true, user });
        next();

    } catch (e) {
        console.log(e);
    }
}


module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            console.log("❌ No user found with email:", email);
            return res.status(401).json({ message: "Incorrect email" });
        }

        console.log("🔍 Found user. Hashed password in DB:", user.password);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("❌ Password didn't match");
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            secure: false,
        });

        console.log("✅ Login successful for:", email);
        console.log("Password entered:", password);
        console.log("Password in DB:", user.password);

        res.status(200).json({
            message: "User logged in successfully",
            success: true,
        });

    } catch (e) {
        console.log("🔥 Error in login:", e);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.Logout = ("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
});