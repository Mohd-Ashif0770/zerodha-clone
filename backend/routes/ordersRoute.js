const express = require("express");
const router = express.Router();
const { newOrder, fetchOrders } = require("../controllers/ordersController");

router.post("/", newOrder);
router.get("/", fetchOrders);

module.exports = router;
