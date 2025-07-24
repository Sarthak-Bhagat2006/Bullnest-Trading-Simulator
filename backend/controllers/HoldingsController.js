const { HoldingModel } = require('../model/HoldingModel.js')
const getStockFromFinnhub = require("../services/getStockFromFinnhub.js");


module.exports.AllHoldings = async (req, res) => {
    try {
        const userId = req.user.id;
        const holdings = await HoldingModel.find({ userId });

        const uniqueSymbols = [...new Set(holdings.map(h => h.name))];

        const priceMap = {};
        for (const symbol of uniqueSymbols) {
            const { currentPrice, previousClose } = await getStockFromFinnhub(symbol);
            priceMap[symbol] = {
                currentPrice,
                netChange: (currentPrice - previousClose).toFixed(2),
                dayChange: (((currentPrice - previousClose) / previousClose) * 100).toFixed(2) + "%",
            };
        }

        const mergedHoldings = holdings.map(h => ({
            ...h._doc,
            ...priceMap[h.name],
        }));

        res.json(mergedHoldings);
    } catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).json({ error: "Failed to fetch holdings." });
    }
};