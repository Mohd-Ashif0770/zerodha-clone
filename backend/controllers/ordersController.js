const Orders = require("../models/orders");

module.exports.newOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new Orders({ name, qty, price, mode });
  await newOrder.save();
  res.status(200).json({ message: "Your order placed", order: newOrder });
};

module.exports.fetchOrders = async (req, res) => {
  try {
    const allOrders = await Orders.find().sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
