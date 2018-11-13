const frameworks = require("express").Router();
const Frameworks = require("../models/Frameworks");

// Get all frameworks regardless of the hub.
frameworks.get("/", function(req, res) {
  var page = req.query.page;
  Frameworks.find({})
    .skip(page * 15)
    .limit(15)
    .then(frameworks => {
      return res.json({
        frameworks
      });
    });
});

// Get a framework by id
frameworks.get("/:id", function(req, res) {
  Frameworks.findOne({ _id: req.params.id }, function(err, framework) {
    return res.json({
      framework
    });
  });
});

// Get all frameworks for a particular hub
frameworks.get("/hub/:hubId", function(req, res) {
  Frameworks.find({ hubId: req.params.hubId }, function(err, frameworks) {
    return res.json({
      frameworks
    });
  });
});

module.exports = frameworks;
