import { Schema } from "mongoose";
import mongoose from "mongoose";
const likesSchema = new Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "USer"
    }
}, { timestamps: true })

export const Like = mongoose.model("Like", likesSchema)