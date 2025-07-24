const { model } = require("mongoose");

const { UserSchema } = require('../schemas/UserSchema.js');

const UserModel = model("user", UserSchema);

module.exports = { UserModel };