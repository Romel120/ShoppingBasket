// controllers/productsController.js
const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;

    // Add your validation and update logic here
    const result = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });

    res.json(result);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  // Implement the logic for deleting a product
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
