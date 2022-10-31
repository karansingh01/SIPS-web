const mongoose = require('mongoose');
const Schema = mongoose.Schema.Types.ObjectId;

const DrinkBookmark = new mongoose.Schema({
    user_id: {type: Schema, ref: 'User'},
    drink_id: {type: Schema, ref: 'Drink'},
    drink_name: {type: String, ref: 'Drink'}
});

module.exports = mongoose.model('DrinkBookmark', DrinkBookmark);