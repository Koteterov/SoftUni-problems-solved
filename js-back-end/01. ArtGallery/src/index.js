const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { initializeDatabase } = require("./config/database");
const { auth } = require("./middlewares/authMiddleware");
const { errorHandler } = require("./middlewares/errorMiddlleware");


const app = express();

require("./config/handlebars")(app);

app.use("/static", express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(routes);
app.use(errorHandler);


initializeDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Server is listening on port 3000"));
  })
  .catch((err) => {
    console.log("Cannot connect to DB", err);
  });
