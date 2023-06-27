import { Schema, model, models } from "mongoose";

const MusicSchema = new Schema({
    title: {
        type: String,
        unique: [true,"A music with this title exists"],
        required: [true, "A music must have a title"]
        },
    image: {
        type: String,
        required: [true, "Include an image for this music"]
    },
    singer: {
        type: String,
        required: [true,"A song should have a singer"]
    },
    description: {
        type: String,
        required: [false]
    },
    slug: {
        type: String,
        required: [true,"Slug is required"]
    },
    audio: {
        type: String,
        required: [true,"Add the audio link"]
    },
    date_released: {
        type: Date,
        required: [true,"Include song release date"]
    },
    total_downloads: {
        type: Number,
        required: [false],
        default: "0"
    }
    })

    MusicSchema.set('toJSON',{
        virtuals: true,
        versionKey: false,
        transform: function(doc, ret) {
            delete ret._id;
            delete ret.__v;
            delete ret.total_downloads;
        }
    });

    
const Music = models.Music || model("Music",MusicSchema)
export default Music;