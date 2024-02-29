import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
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

const Contact = mongoose.models.contact || mongoose.model("contact", contactSchema);

export default Contact;
