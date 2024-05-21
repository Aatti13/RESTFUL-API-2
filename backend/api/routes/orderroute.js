const express = require('express');
const router = express.Router();
const { getOrders, getOrder, addOrder, updateOrder, deleteOrder } = require('../controllers/ordercontroller');

router.post('/', addOrder);

router.get('/', getOrders);

router.get('/:id', getOrder);

router.put('/:id', updateOrder);

router.delete('/:id', deleteOrder);

module.exports = router;