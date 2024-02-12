// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); 
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const customersRouter = require('./routes/customer'); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for JSON parsing
app.use(express.json());

app.use(cors());
app.options('*', cors());


// Routes
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/customers', customersRouter); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
