const Position = require('../models/positions')

module.exports.fetchPosition  = async(req, res)=>{
    const allPositions = await Position.find();
    res.json(allPositions)
}