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

    // Pour gérer la 404, il faut se poser la question :
    // Est-ce que le paramètre gameName correspond à un jeu dans mon fichier games.json ?
    const gameFound = games.find((game) => game.name === gameName);



  }
}

module.exports = gameController;
