const router = require("express").Router();

router.get("/", async (req, res) => {

  res.render("Home")
  
});


module.exports = router;
