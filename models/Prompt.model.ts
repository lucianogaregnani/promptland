import mongoose, { Schema, models } from "mongoose";
import User from "./User.model";

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
    require: [true, "The creator is required"],
    ref: User,
  },
});

const Prompt = models.Prompt || mongoose.model("Prompt", PromptModel);
export default Prompt;
