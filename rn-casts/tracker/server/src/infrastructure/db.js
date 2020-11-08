require("../models");
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

function connectionCb() {
  console.log("connect to mongo instance");
}
function errorCb(err) {
  console.log(`mongodb connection error ${err}`);
}

mongoose.connection.on("connected", connectionCb);
mongoose.connection.on("error", errorCb);
