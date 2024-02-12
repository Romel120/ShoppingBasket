// controllers/customerController.js
const Customer = require('../models/customer');

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      console.error('Error getting all customers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  createCustomer,getAllCustomers
};
