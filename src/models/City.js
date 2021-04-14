const mongoose = require("../database");

const CitySchema = new mongoose.Schema({
  uf: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const City = mongoose.model("City", CitySchema);
module.exports = City;
