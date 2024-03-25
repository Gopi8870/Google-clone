// product.js for storing all the routes related to product
const express=require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');

// call the Router(inbuilt) within express
const router=express.Router();

// call the route() method for setting path(route)
// get() used for getting data regarding products
// within the get just give the function name(getProducts) not a definition
// definition must be in another folder which is controller inside backend
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

// export this router module
module.exports=router;