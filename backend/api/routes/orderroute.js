const express = require('express');
const router = express.Router();
/*
  CONTROLLERS

  1. addOrder        --> '(POST)/api/orders/'     --> To create an Order
  2. getOrders       --> '(GET)/api/orders/'      --> To get All the orders
  3. getOrder{id}    --> '(GET)/api/orders/id'    --> To get Order linked to specified ID
  4. updateOrder{id} --> '(PUT)/api/orders/id'    --> To update Orders linked to specified ID
  5. deleteOrder{id} --> '(DELETE)/api/orders/id' --> To delete an order linked to a specific ID 
*/

const { getOrders, getOrder, addOrder, updateOrder, deleteOrder } = require('../controllers/ordercontroller');

// Create
router.post('/', addOrder);

// Read
router.get('/', getOrders);

router.get('/:id', getOrder);

// Update
router.put('/:id', updateOrder);

// Delete
router.delete('/:id', deleteOrder);

module.exports = router;