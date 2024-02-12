// routes/customers.js
const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');
const Customer = require('../models/customer');



// Create a new customer
router.post('/', customerController.createCustomer);

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the customer by username
      const customer = await Customer.findOne({ username });
  
      if (!customer) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Compare the provided password with the stored password
      if (password === customer.password) {
        // Successfully logged in
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
// Get all customers
router.get('/', customerController.getAllCustomers);

module.exports = router;
