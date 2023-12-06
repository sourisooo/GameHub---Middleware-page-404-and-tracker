
const games = require('../games.json');



const page404 = (req,res,next) => {

    const { param } = req.params;

    console.log("line10"+param,param===undefined,req.url,req.url==='/',param===undefined);

    const { gameName } = req.params;

    console.log("line10"+gameName,gameName===undefined,req.url,req.url==='/',((req.url).slice(0,6)==="/game/"));


      if(req.url==='/view404') {res.render('view404')} else 
    
     if ((req.url==='/')) next();

      
     if(((req.url).slice(0,6)!=='/game/')&&(param!==undefined)) { res.redirect('/view404')} 


    if(gameName===undefined) {next()} else {


    const gameFound = games.find((game) => {return game.name === gameName})



    if(gameFound) {
        res.render(gameName);
      } else {
    
        res.redirect('/view404')
      }

    ;}      

}

module.exports = page404;


