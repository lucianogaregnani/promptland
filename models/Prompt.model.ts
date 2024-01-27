import mongoose, { Schema, models } from "mongoose";

const PromptModel = new Schema({
  title: {
    type: String,
    require: [true, "The title is required!"],
  },
  prompt: {
    type: String,
    require: [true, "The prompt is required!"],
  },
  tags: {
    type: String,
  },
  likes: {
    type: Number,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Propmt = models.Prompt || mongoose.model("Prompt", PromptModel);
export default Propmt;
