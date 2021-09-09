const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomSchema = new Schema({
	// these values come from the user
	name: String,
	price: Number,
	// this value will be put in by us
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;