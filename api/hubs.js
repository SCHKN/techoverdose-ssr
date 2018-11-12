const hubs = require("express").Router();
const Hubs = require("../models/Hubs");


hubs.get("/", function(req, res) {
  Hubs.find({}, function(err, hubs) {
    return res.json({
      hubs
    });
  });
});

module.exports = hubs;
