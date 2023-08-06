const { Schema, model } = require('mongoose');

const waitinglistSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
    IGN: { type: String, required: true },
});

module.exports = model('waitinglist', waitinglistSchema, 'waitinglist');
