const express = require('express')
const router = express.Router()
const { fetchPosition } = require('../controllers/positionController');


router.get("/", fetchPosition)

module.exports= router;