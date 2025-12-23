import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { versionKey: false, timestamps: true }
);

// * Tạo model từ schema
const Product = mongoose.model("Product", productSchema);

export default Product;
