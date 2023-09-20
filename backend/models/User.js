import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requiered: true,
        trim: true
    },
    password: {
        type: String,
        requiered: true,
        trim: true    
    },
    email: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    },
    token: {
        type: String,
    },
    confirm : {
        type: Boolean,
        default: false,
    },
    user: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    }
}, {
    timestamps: true,
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function(passwordForm) {
    return await bcrypt.compare(passwordForm, this.password)
};

const User = mongoose.model("User", userSchema);

export default User;
