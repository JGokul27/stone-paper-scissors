const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  player1Score: { type: Number, required: true },
  player2Score: { type: Number, required: true },
  winner: { type: String, required: true }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
