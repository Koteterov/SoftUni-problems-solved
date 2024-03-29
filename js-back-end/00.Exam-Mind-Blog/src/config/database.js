const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/mindBlog";

exports.initializeDatabase = () => {
  mongoose.connection.on("open", () => console.log("DB is connected"));

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
