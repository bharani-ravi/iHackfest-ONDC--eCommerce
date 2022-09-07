const Product = require("../models/productModal");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ data: products });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ id });

    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, description, image, category, pincode } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      image,
      category,
      pincode,
    });

    res.status(200).json({
      data: newProduct,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// exports.getNearbyProduct = async (req, res) => {};

exports.editProduct = async (req, res) => {
  try {
    const { name, price, description, image, category, pincode } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image, category, pincode },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.deleteOne({
      id: req.params.id,
    });
    res.status(200).json({
      data: "Product Successfully Deleted",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
