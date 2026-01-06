import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },

    slug: {
      type: String,
    },

    thumbnail: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
const Category = model("Category", categorySchema);
export default Category;
