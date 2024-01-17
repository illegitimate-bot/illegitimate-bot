import { model, Schema } from "mongoose"

const snipeCacheSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userid: { type: String, required: true },
    channelid: { type: String, required: true },
    data: { type: Object, required: true },
    date: { type: Date, default: Date.now(), expires: 600 },
})

export default model("snipeCache", snipeCacheSchema, "snipeCache")
