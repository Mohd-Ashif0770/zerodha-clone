const Holding = require('../models/holdings')

module.exports.fetchHolding  = async(req, res)=>{
    const allHoldings = await Holding.find();
    res.json(allHoldings)
}