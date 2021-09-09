const router = require("express").Router();
const Room = require('../models/Room');
const { loginCheck } = require('./middlewares');


router.get('/', (req, res, next) => {
	// TODO
});

router.get('/add', (req, res, next) => {
	res.render('rooms/add');
});

router.post('/', loginCheck(), (req, res, next) => {
	// TODO
});

router.get('/:id/delete', (req, res, next) => {
	// TODO
});

module.exports = router;