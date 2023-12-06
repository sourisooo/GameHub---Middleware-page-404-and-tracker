const games = require('../games.json');

const gameController = {
  showFourchette(req, res) {
    res.render('fourchette');
  },
  showDiceRoller(req, res) {
    res.render('diceRoller');
  },
  showGame(req, res) {
    
    const { gameName } = req.params;

    res.render(gameName);

  }
}

module.exports = gameController;

