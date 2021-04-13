const mongoose = require("../database");

const UfSchema = new mongoose.Schema({
  name: {
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
