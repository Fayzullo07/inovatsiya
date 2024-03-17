import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
        },
        phone: {
            type: String,
            required: [true, "Please provide a phone number"],
        },
        desc: {
            type: String,
            required: [true, "Please provide a description"],
        },
    },
    {
        timestamps: true,
    }
);

const Messages = mongoose.models.Messages || mongoose.model("Messages", messageSchema);

export default Messages;
