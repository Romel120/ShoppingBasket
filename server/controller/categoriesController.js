// controllers/categoriesController.js
const Category = require('../models/category');

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error getting all categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
