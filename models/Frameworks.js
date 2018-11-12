const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FrameworksSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creationYear: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  hubId: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: false
  }
});

const Frameworks = mongoose.model("frameworks", FrameworksSchema);

module.exports = Frameworks;
