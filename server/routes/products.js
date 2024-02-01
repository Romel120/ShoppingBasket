// routes/products.js
const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

// Create a new product
router.post('/', productsController.createProduct);

// Get all products
router.get('/', productsController.getAllProducts);

// Update a product
router.put('/:productId', productsController.updateProduct);

// Delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
