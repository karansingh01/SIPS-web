import mongoose, { Mongoose } from "mongoose";

const messageSchema = new mongoose.Schema({
    text: String,
    createdAt: String,
    createdBy: String
});

module.exports = mongoose.model('Message', messageSchema);