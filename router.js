// Express nous fournis une fonction Router qui nous permet de créer des routes
const { Router } = require('express');
const homeController = require('./controllers/home');
const gameController = require('./controllers/game');
const page404 = require('./middleware/page404');
const tracker = require('./middleware/tracker');


// Je créer un router
const router = Router();

router.get('/', tracker, page404 ,homeController.homepage);

// Tous ce que je faisais avec app, je peux le faire avec router
router.get('/:param', tracker, page404 ,homeController.homepage);

// router.get('/game/fourchette', gameController.showFourchette);

// router.get('/game/diceRoller', gameController.showDiceRoller);

// Je créer une route paramétrée
// :gameName est un paramètre dynamique qui peut prendre n'importe quelle valeur
router.get('/game/:gameName', tracker, page404 ,gameController.showGame);

router.get('/view404', tracker,homeController.pageerror);


// Je met à disposition de ceux qui le demande le router
module.exports = router;
