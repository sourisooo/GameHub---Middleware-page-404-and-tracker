const express = require('express');
const games = require('./games.json');
// Je récupère la définition de mes routes qui est dans le fichier router.js
const router = require('./router');

const app = express();

// Je dis que mon application va utiliser le moteur de rendu ejs
app.set('view engine', 'ejs');

// Tous les fichiers statiques (css, js, images) seront dans le dossier public
// Je vais les mettres à disposition de ceux qu'ils les demandent
app.use(express.static('public'));

// Pour passé des données à toutes mes vues ejs
// app.locals.leNomDeMaVariable = laValeurDeMaVariable
app.locals.games = games;

// Je dis à mon application express d'utiliser les routes de mon router
app.use(router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
