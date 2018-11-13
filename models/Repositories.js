const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepositoriesSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  watchers: {
    type: Number,
    required: true
  },
  forks: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: false
  },
  frameworkId: {
    type: Number,
    required: true
  }
});

const Repositories = mongoose.model("repositories", RepositoriesSchema);

module.exports = Repositories;
