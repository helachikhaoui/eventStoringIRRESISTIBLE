const express = require('express');
const router = express.Router();
var notifEvents = require('../routes/notifEvent');



/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api works');
});

router.use(function (req, res, next) {
  // do logging

  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // console.log(req);
  console.log('###### Request Triggered ######');

  console.log('From :' + req.url);
  if (req.body !== null) {
    console.log('With a body content :' + JSON.stringify(req.body));
  }
  console.log('###############################');
  console.log('');

  next(); // make sure we go to the next routes and don't stop here
});

//Storing users' notif clicks into DB
//router.route("/notifsClicks")
//  .get(beacons.getAll);
router.route("/notifsClicks/add")
  .post(notifEvents.createOne);

module.exports = router;
