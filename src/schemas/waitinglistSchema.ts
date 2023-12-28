import { Schema, model } from "mongoose"

const waitinglistSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    uuid: { type: String, required: true },
    IGN: { type: String, required: true },
    timestamp: { type: Number, required: true }
})

export = model("waitinglist", waitinglistSchema, "waitinglist")