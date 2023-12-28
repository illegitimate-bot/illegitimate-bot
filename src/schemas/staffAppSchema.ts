import { Schema, model } from "mongoose"

const staffAppSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
})

export = model("staffapp", staffAppSchema, "staffapp")
