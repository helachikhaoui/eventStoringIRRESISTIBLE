
var NotifEvent = require("../models/notifEvent");
var mongoose = require("mongoose");

module.exports = {

  createOne: function (req, res, next) {
    console.log("==> post request ");
    var notifEvent = {
      id: mongoose.Types.ObjectId(),
      storename: req.body.storename,
      major: req.body.major,
      minor: req.body.minor,
      offer: req.body.offer,
      category: req.body.category,
      date: req.body.date,
      user: req.body.user,
    };
    NotifEvent.create(notifEvent, function (err, beacon) {
      if (err) return res.status(400).json(err);

      res.status(201).json(notifEvent);
    });
  }


};
