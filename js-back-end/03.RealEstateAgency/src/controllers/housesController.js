const router = require("express").Router();

router.get("/", (req, res) => {
    res.locals.title = "House for Rent"
    res.render("houses");
  });
  

module.exports = router;
