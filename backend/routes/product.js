const express = require("express");

const {
  createProduct,
  editProduct,
  getSingleProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/edit/:id", editProduct);

module.exports = router;
