const { model } = require("mongoose");

const { HoldingSchema } = require('../schemas/HoldingsSchema.js');

const HoldingModel = new model("holding", HoldingSchema);

module.exports = { HoldingModel };