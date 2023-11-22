const { Schema, model } = require("mongoose")

const guildAppSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
})

module.exports = model("guildapp", guildAppSchema, "guildapp")
