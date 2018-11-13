const config = require("../db.js");
const mongoose = require("mongoose");
const axios = require("axios");
const Frameworks = require("../models/Frameworks");

// Database initialization
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Topics retrieval connected to database");
    },
    err => {
      console.log("Topics retrieval could not connect to the database" + err);
    }
  );

const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github.mercy-preview+json" }
});

instance
  .get('/search/topics?q=""+is:curated&page=1&per_page=100')
  .then(function(response) {
    if (response.data && response.data.items) {
      response.data.items.forEach(item => {
        const framework = new Frameworks({
          name: item.name,
          displayName: item.display_name,
          description: item.short_description,
          released: item.released,
          creator: item.created_by,
          imageURL:
            "https://i2.wp.com/www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg?ssl=1",
          hubId: 0
        });
        framework.save(function(err, results) {
          console.log("Saved a new framework");
        });
      });
    }
  })
  .catch(function(error) {
    console.log(error);
  });
