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

// Get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.find({ category: categoryId });
    //  console.log(products) ;
     res.status(200).json(products);
   
  } catch (error) {
    console.error('Error getting products by category:', error);
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
  try {
    const productId = req.params.id;

    // Add your logic to find and delete the product
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(204).json(deletedProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
