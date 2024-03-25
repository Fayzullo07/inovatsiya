import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
    {
        img: {
            type: String,
            required: [true, "Please provide a img"]
        },
        title: {
            type: String,
            required: [true, "Please provide a title"],
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

const News = mongoose.models.News || mongoose.model("News", newSchema);

export default News;
