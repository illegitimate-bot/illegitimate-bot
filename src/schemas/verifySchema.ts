import { Schema, model } from "mongoose"

const verifySchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true }
})

export = model("verify", verifySchema, "verify")
