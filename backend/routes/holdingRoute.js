
const express = require('express')
const router = express.Router()
const {fetchHolding} = require("../controllers/holdingController")


router.get("/", fetchHolding)

module.exports= router;