const { Schema, model } = require('mongoose');

const verifySchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
});

module.exports = model('verify', verifySchema, 'verify');
