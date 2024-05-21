const express = require('express');
const router = express.Router();
/*
  CONTROLLERS

  1. addProduct        --> '(POST)/api/orders/'     --> To create an Order
  2. getProducts       --> '(GET)/api/orders/'      --> To get All the orders
  3. getProduct{id}    --> '(GET)/api/orders/id'    --> To get Order linked to specified ID
  4. updateProduct{id} --> '(PUT)/api/orders/id'    --> To update Orders linked to specified ID
  5. deleteProduct{id} --> '(DELETE)/api/orders/id' --> To delete an order linked to a specific ID 
*/

const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/productcontroller');

// Create
router.post('/', addProduct);

// Read
router.get('/', getProducts);
router.get('/:id', getProduct);

// Update
router.put('/', updateProduct);

// Delete
router.delete('/', deleteProduct);

module.exports = router;
