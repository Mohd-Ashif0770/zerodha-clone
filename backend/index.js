const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const Holding = require("./models/holdings");
const Position = require("./models/positions");
const PORT = process.env.PORT || 5000;

const holdingRoute = require("./routes/holdingRoute");
const positionRoute = require("./routes/positionRoute");
const ordersRoute = require("./routes/ordersRoute");
const authRoute = require("./routes/authRoute");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://zerodha-clone-kappa-eight.vercel.app",
      "https://zerodha-clone-okb8.vercel.app",
    ], // your Vite frontend
    credentials: true, // <--- this is important
  })
);

app.use("/holdings", holdingRoute);
app.use("/positions", positionRoute);
app.use("/orders", ordersRoute);
app.use("/", authRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on Port ${PORT}`);
});
