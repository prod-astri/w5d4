const router = require("express").Router();
const Room = require('../models/Room');
// const { loginCheck } = require('./middlewares');


router.get('/', (req, res, next) => {
	// show only the rooms that the logged in user created
	Room.find({ owner: req.user._id })
		.then(rooms => res.render('rooms/index', { roomList: rooms }))
		.catch(err => next(err))
});

router.get('/add', (req, res, next) => {
	res.render('rooms/add');
});

router.post('/', (req, res, next) => {
	const { name, price } = req.body;
	// node-basic-auth req.session.user
	console.log(req.user);
	Room.create({
		name: name,
		price: price,
		owner: req.user._id
	})
		.then(() => {
			res.redirect('/rooms');
		})
		.catch(err => next(err));
});

router.get('/:id/delete', (req, res, next) => {
	// TODO
});

module.exports = router;