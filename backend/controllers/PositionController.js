const { PositionModel } = require('../model/PositionModel.js');


module.exports.Allpositions = async (req, res) => {
    let allpositions = await PositionModel.find({});
    res.json(allpositions);
};