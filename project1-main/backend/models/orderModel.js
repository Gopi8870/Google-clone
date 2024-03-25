const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
    
});

// must create the model by using that created schema
const orderModel=mongoose.model('Order',orderSchema);

module.exports=orderModel;