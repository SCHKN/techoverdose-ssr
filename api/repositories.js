const repositories = require("express").Router();
const Repositories = require("../models/Repositories");

repositories.get("/framework/:id", function(req, res) {
  var page = req.query.page;
  var frameworkId = req.params.id;

  Repositories.aggregate([
    {
      $match: {
        frameworkId: { $eq: parseInt(frameworkId) }
      }
    }
  ])
    .skip(page * 4)
    .limit(4)
    .then(repositories => {
      return res.json({
        repositories
      });
    });
});

module.exports = repositories;
