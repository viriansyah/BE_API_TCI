const db = require("../models");
const Word = db.word;

exports.addText = async (req, res) => {
  const { first_word, second_word } = req.body;
  try {
    const containsAllLetters = [...first_word.toLowerCase()].every((letter) =>
      second_word.toLowerCase().includes(letter)
    );

    res.json({
      containsAllLetters,
    });
  } catch (error) {
    console.error("Error checking containLetters:", error);
    res.status(500).json({
      error: "An error occurred while checking containLetters",
    });
  }
};
