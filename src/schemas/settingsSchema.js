const { Schema, model } = require("mongoose")

const settingsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    value: { type: String, required: true },
})

module.exports = model("settings", settingsSchema, "settings")
