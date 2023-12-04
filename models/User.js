const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: { type: String },
        phone_number: { type: String },
        user_name: { type: String, required: true },
        password: { type: String, required: true },
        nickname: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", User);