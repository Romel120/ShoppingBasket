// models/customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    unique: true,
  },
  username: String,
  email: String,
  mobile: String,
  password: String,  // You may want to hash passwords for security
});

customerSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.customerId) {
      const count = await mongoose.model('Customer').countDocuments();
      doc.customerId = count + 1;
    }
    next();
  });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
