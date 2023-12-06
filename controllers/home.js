// Mes fichiers de controller ne serviront qu'à contenir les fonctions à exécuter pour chaque route
const homeController = {
  homepage(req, res) {
    res.render('index');
  },

  pageerror(req, res) {

    res.render('view404');

  }

}

module.exports = homeController;
