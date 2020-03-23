var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Leather = new Schema({
  number: Number,
  type: String,
  image: String
});

module.exports = mongoose.model("leather", Leather);
