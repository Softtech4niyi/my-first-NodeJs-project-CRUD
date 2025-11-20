const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js')
const {
    getProducts, 
    getSingleProduct, 
    postProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller.js');



router.get('/', getProducts);
router.get('/:id', getSingleProduct); 
router.post('/', postProduct);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);




module.exports = router;