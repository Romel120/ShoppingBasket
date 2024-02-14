// routes/products.js
const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

// Create a new product
router.post('/', productsController.createProduct);

// Get all products
router.get('/', productsController.getAllProducts);

// Get products by category
router.get('/categories/:categoryId', productsController.getProductsByCategory);
// localhost:3000/api/v1/categories/:categoryId

// Update a product
router.put('/:productId', productsController.updateProduct);

// Delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
