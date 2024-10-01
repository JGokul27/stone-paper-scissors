const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./routes/gameRoutes");  // Import routes

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://gokuljcse2021:gokulpro7@cluster0.tvnvn.mongodb.net/stone-paper-scissors?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", gameRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
