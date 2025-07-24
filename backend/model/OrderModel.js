const { model } = require("mongoose");

const { OrderSchema } = require('../schemas/Orders.js');

const OrderModel = new model("order", OrderSchema);

module.exports = { OrderModel };