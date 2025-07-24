const { Signup, Login, Logout } = require("../controllers/AuthController.js")
const { buy } = require("../controllers/OrderController.js")
const { sell } = require("../controllers/OrderController.js")
const { AllOrders } = require("../controllers/OrderController.js")
const { AllHoldings } = require("../controllers/HoldingsController");
const { Allpositions } = require("../controllers/PositionController.js")
const router = require("express").Router();
const { userVerification } = require("../middlewares/AuthMiddlewares");
const { UserModel } = require("../model/UserModel");
const { Funds } = require("../controllers/FundsConatroller.js")


router.post("/signup", Signup);

router.get("/funds", userVerification, Funds)

router.post("/login", Login);

router.get("/logout", Logout);

router.post('/buy', userVerification, buy);

router.post('/sell', userVerification, sell);

router.get('/allOrders', userVerification, AllOrders)

router.get('/allHoldings', userVerification, AllHoldings);

router.get('/allpositions', userVerification, Allpositions);

router.get("/profile", userVerification, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ username: user.username });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;