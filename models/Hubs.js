const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HubsSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
});

const Hubs = mongoose.model("hubs", HubsSchema);

module.exports = Hubs;
