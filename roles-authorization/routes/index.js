const router = require("express").Router();
const { loginCheck } = require('./middlewares');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get('/profile', loginCheck(), (req, res, next) => {
  // using node-basic-auth: req.session.user
  const loggedInUser = req.user;
  res.render('profile', { user: loggedInUser })
});


module.exports = router;
