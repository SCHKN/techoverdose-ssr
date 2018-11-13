const config = require("../db.js");
const mongoose = require("mongoose");
const axios = require("axios");
const Frameworks = require("../models/Frameworks");
const Repositories = require("../models/Repositories");
const cron = require("node-cron");

// Database initialization
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Repositories service connected to database");
    },
    err => {
      console.log(
        "Repositories service could not connect to the database" + err
      );
    }
  );

// axios instance
const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github.mercy-preview+json" }
});

let frameworks = [];

Frameworks.find({}).then(results => (topics = results));

// Every five seconds, check for new updated repos on Github.
cron.schedule("*/10 * * * * *", () => {
  const framework = topics.shift();
  console.log("found " + framework);
  if (framework) {
    instance
      .get(
        `/search/repositories?q=topic:${
          framework.name
        }+pushed:>2018-11-10&sort=stars&order=desc`
      )
      .then(function(response) {
        if (response.data && response.data.items) {
          response.data.items.forEach(item => {
            console.log(item.name);
            Repositories.findOne({ name: item.name }, function(
              err,
              existingRepo
            ) {
              if (!existingRepo) {
                console.log("not existing");
                const repository = new Repositories({
                  id: parseInt(item.id),
                  name: item.name,
                  imageURL: item.owner.avatar_url,
                  description: item.description,
                  owner: item.owner.login,
                  updatedAt: item.updated_at,
                  stars: item.stargazers_count,
                  watchers: item.watchers_count,
                  forks: item.forks_count,
                  score: item.score,
                  language: item.language,
                  frameworkId: framework._id,
                  createdAt: Date.now()
                });
                repository.save(function(err, results) {
                  if (!err) {
                    incrementNumberOfRepositories(framework._id);
                  }
                });
              }
            });
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

// Increment clip count for the streamer on save
function incrementNumberOfRepositories(frameworkId) {
  Frameworks.updateOne(
    { _id: frameworkId },
    {
      $inc: { numberOfRepositories: 1 }
    },
    {
      upsert: true
    },
    function(err, result) {
      if (!err) {
        "I increment the number of repositories for " + frameworkId;
      } else {
        console.log(err);
      }
    }
  );
}
