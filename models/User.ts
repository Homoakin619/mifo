import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Email already exist!"],
        required: [true, "email is required"],
    },
    password_hash : {
        type: String,
        required:true
    }
},{
    timestamps:true
});

UserSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.password_hash;
    }
});

const User = models.User || model("User",UserSchema)
export default User;