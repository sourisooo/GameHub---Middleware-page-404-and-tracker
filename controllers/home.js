// Mes fichiers de controller ne serviront qu'à contenir les fonctions à exécuter pour chaque route
const homeController = {
  homepage(req, res) {

    const { param } = req.params;

    console.log(param, param===undefined)

  

      res.render('index');




   
  },

  pageerror(req, res) {

    res.render('view404');

  }

}

module.exports = homeController;
