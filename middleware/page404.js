
const games = require('../games.json');



const page404 = (req,res,next) => {

    const { gameName } = req.params;

    // const gameFound = games.find((game) => game.name === gameName);

    const gameFound = games.find((game) => {return game.name === gameName})

    // console.log("gamef:"+ gameFound);

    if(gameFound) {
        res.render(gameName);
      } else {
        // Sinon, je renvoie une 404
        res.redirect('/view404');
      }

    next();


}

module.exports = page404;


