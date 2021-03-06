const mongoose = require("../database");

const UfSchema = new mongoose.Schema({
  code: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  uf: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Uf = mongoose.model("Uf", UfSchema);
module.exports = Uf;
