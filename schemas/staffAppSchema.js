const { Schema, model } = require("mongoose")

const staffAppSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
})

module.exports = model("staffapp", staffAppSchema, "staffapp")
