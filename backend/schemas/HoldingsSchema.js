const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: String,
    qty: Number,
    avgPrice: Number,
    currentPrice: Number,
    netChange: String,
    dayChange: String,

})

module.exports = { HoldingSchema };