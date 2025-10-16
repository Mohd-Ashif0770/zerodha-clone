const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const cors = require('cors')

const connectDB = require("./config/db");
const Holding = require("./models/holdings");
const Position = require("./models/positions");
const PORT = process.env.PORT || 5000;

const holdingRoute = require('./routes/holdingRoute')
const positionRoute = require('./routes/positionRoute')
const ordersRoute = require('./routes/ordersRoute')
const authRoute = require('./routes/authRoute')

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // your Vite frontend
    credentials: true, // <--- this is important
  })
);

app.use("/holdings", holdingRoute)
app.use("/positions", positionRoute)
app.use("/orders", ordersRoute)
app.use("/", authRoute)

app.get("/", (req, res) => {
  res.send("Working");
});

//! Inserting dummy data
// app.get("/addPositions", async (req, res) => {
//   const tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//   try {
//     for (const item of tempPositions) {
//       const newPostion = new Position({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       });

//       await newPostion.save();
//     }
//     return res.status(201).json({ message: "Postions added" });
//   } catch (err) {
//     console.error("Error adding positions", err);
//     return res.status(500).json({ error: "Failed to add postions" });
//   }
// });

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on Port ${PORT}`);
});
