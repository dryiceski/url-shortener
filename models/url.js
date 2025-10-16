import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    shortId: {
        type:String
    },
    url_name: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const URL = mongoose.model("url", urlSchema);

export { URL }