const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/bookTalk";

exports.initializeDatabase = () => {
  mongoose.connection.on("open", () => console.log("DB is connected"));

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
