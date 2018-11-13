const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FrameworksSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  released: {
    type: String,
    required: false
  },
  creator: {
    type: String,
    required: false
  },
  imageURL: {
    type: String,
    required: true
  },
  hubId: {
    type: Number,
    required: true
  }
});

const Frameworks = mongoose.model("frameworks", FrameworksSchema);

module.exports = Frameworks;
