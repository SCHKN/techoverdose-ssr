const frameworks = require("express").Router();
const Frameworks = require("../models/Frameworks");

// Get all frameworks regardless of the hub.
frameworks.get("/", function(req, res) {
  Frameworks.find({}, function(err, frameworks) {
    return res.json({
      frameworks
    });
  });
});

// Get all frameworks for a particular hub
frameworks.get("/:hubId", function(req, res) {
  Frameworks.find({ hubId: req.params.hubId }, function(err, frameworks) {
    return res.json({
      frameworks
    });
  });
});

module.exports = frameworks;
