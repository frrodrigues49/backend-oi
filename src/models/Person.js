const mongoose = require("../database");

const PersonSchema = new mongoose.Schema({
  kind: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  document: {
    type: String,
    unique: true,
    require: true
  },
  uf: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  birth_date: {
    type: Date,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;
