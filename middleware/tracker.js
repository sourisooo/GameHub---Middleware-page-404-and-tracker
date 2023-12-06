
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin

require('dayjs/locale/fr');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('fr');
let datatrack = [];
let requestNumber = 0;


const today = (e) => dayjs().tz(e).format('HH:mm, dddd, MMMM D YYYY');


const tracker = (req,res,next) => {


    // console.log(req.ip, req.socket.remoteAddress, today("Europe/Paris"),req.url)

    requestNumber++;

    datatrack = datatrack + "from ip:" + req.ip+ req.socket.remoteAddress+" at " +today("Europe/Paris")+" for URL "+req.url+" request number "+requestNumber+"\n";

    console.log(datatrack)

    next();


}

module.exports = tracker;
