const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxLenght: [100, "Product name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    image: { type: String, required: [true, "Please Paste the image url"] },
    category: {
      type: String,
      required: [true, "Please Select category for this product"],
    },
    pincode: {
      type: String,
      required: [true, "Please Enter the Pincode"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
