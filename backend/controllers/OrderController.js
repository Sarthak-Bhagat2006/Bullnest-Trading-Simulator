const { OrderModel } = require('../model/OrderModel.js');
const { UserModel } = require('../model/UserModel.js');
const { HoldingModel } = require('../model/HoldingModel.js'); // Make sure this is imported

module.exports.AllOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await OrderModel.find({ userId }).sort({ createdAt: -1 }); // latest first
        res.status(200).json(orders);
    } catch (error) {
        console.error("Fetch orders error:", error);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}

module.exports.buy = async (req, res) => {
    try {
        const { name, qty, currentPrice, mode } = req.body;
        const userId = req.user.id;

        // 1. Input Validation
        const quantity = Number(qty);
        const price = Number(currentPrice);

        if (!name || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
            return res.status(400).json({ message: "Invalid input values." });
        }

        const user = await UserModel.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const totalCost = quantity * price;

        if (typeof user.funds !== 'number' || isNaN(user.funds)) {
            return res.status(400).json({ message: "User funds not valid" });
        }

        if (user.funds < totalCost) {
            return res.status(400).json({ message: "Insufficient funds" });
        }

        // 🔄 1. Update or create holding
        let holding = await HoldingModel.findOne({ userId, name });

        if (holding) {
            const totalQty = holding.qty + quantity;
            const totalInvestment = (holding.qty * holding.avgPrice) + (quantity * price);

            holding.qty = totalQty;
            holding.avgPrice = totalInvestment / totalQty;
            await holding.save();
        } else {
            holding = new HoldingModel({
                userId,
                name,
                qty: quantity,
                avgPrice: price,
            });
            await holding.save();
        }

        // 💸 2. Deduct funds
        user.funds = user.funds - totalCost;

        await user.save();
        // 📝 3. Save order
        const newOrder = new OrderModel({
            userId,
            name,
            qty: quantity,
            price: price,
            mode,
        });

        await newOrder.save();

        res.status(201).json({ message: "Order saved!", order: newOrder });

    } catch (err) {
        console.error("Buy Order Error:", err);
        return res.status(500).json({ error: "Failed to save order." });
    }
};

module.exports.sell = async (req, res) => {
    try {
        const { name, qty, mode, price } = req.body;
        const userId = req.user.id;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User Not found" });
        }

        const holding = await HoldingModel.findOne({ userId, name });
        if (!holding || holding.qty < qty) {
            return res.status(404).json({ message: "Not enough holding to sell" });
        }

        //Update Holdings

        holding.qty = holding.qty - qty;

        if (holding.qty === 0) {
            await holding.deleteOne();
        } else {
            await holding.save();
        }

        user.funds = user.funds + price;

        const newOrder = new OrderModel({
            userId,
            name,
            price,
            qty,
            mode,

        });

        await newOrder.save();
        res.status(201).json({ message: "Sell order successful", order: newOrder });
    } catch (error) {

    }
}