
const { UserModel } = require('../model/UserModel.js');

module.exports.Funds = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.json({ funds: user.funds })

    } catch (err) {
        console.error("Error fetching funds:", err);
        res.status(500).json({ message: "Server error" });
    }
}