const express = require('express');
const router = express.Router();
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/productcontroller');


router.post('/', addProduct);

router.get('/', getProducts);
router.get('/:id', getProduct);

router.put('/', updateProduct);

router.delete('/', deleteProduct);

module.exports = router;
