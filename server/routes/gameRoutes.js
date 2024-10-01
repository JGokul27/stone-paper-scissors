const express = require("express");
const Game = require("../models/Game");

const router = express.Router();

router.post("/saveGame", async (req, res) => {
  try {
    const { player1, player2, player1Score, player2Score, winner } = req.body;
    const game = new Game({ player1, player2, player1Score, player2Score, winner });
    await game.save();
    res.status(201).send("Game saved successfully!");
  } catch (error) {
    res.status(500).send("Failed to save game.");
  }
});

router.get("/getGames", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).send("Failed to retrieve games.");
  }
});

module.exports = router;
