const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Author", autorSchema);
