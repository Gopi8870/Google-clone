const express=require('express');
const { createOrder } = require('../controllers/orderController');
const router=express.Router();

// when order the items that time it will return the res
// so post() used here
router.route('/order').post(createOrder);

module.exports=router;