const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch(err => {
    console.log("Problem connection to the database" + err);
  });

module.exports = mongoose;
