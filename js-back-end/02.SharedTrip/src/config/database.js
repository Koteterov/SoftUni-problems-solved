const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/tripCollection";

exports.initializeDatabase = () => {
  mongoose.connection.on("open", () => console.log("DB is connected"));

  return mongoose.connect(connectionString);
};
