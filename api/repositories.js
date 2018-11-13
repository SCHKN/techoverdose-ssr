const repositories = require("express").Router();
const Repositories = require("../models/Repositories");

repositories.get("/framework/:id", function(req, res) {
  var page = req.query.page;
  var frameworkId = req.params.id;
  var q = req.query.q;
  Repositories.aggregate([
    {
      $match: {
        name: {
          $regex: new RegExp(q ? q.toLowerCase() : ""),
          $options: "i"
        },
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
