import { Schema, model } from "mongoose"

const settingsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    value: { type: String, required: true },
})

export = model("settings", settingsSchema, "settings")
