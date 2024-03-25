const orderModel=require('../models/orderModel');
const ProductModel=require('../models/productModel');

// this method is for create the order
exports.createOrder=async (req,res,next)=>{

    // req.body is inbuilt one which is used 
    // for get the content about product when giving request
    // eventhough not output here
    // so use app.use(express.json()) for 
    // need to mention the type of data which is in json format
    const cartItems=req.body;

    // find the total cost of all the products using reduce()
    // acc is similar to sum variable
    const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0).toFixed(2));

    const status='pending';

    // pass the data as the object{} into model
    // after creating the data(row) this create() method will return too
    // the returned values saved in some variable and passed in res.json
    const order=await orderModel.create({cartItems,amount,status});

    
    // update the stock after placing order
    cartItems.forEach(async (item) => {
        // should await here then only get output
        const product = await ProductModel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    })

    res.json({
        success:true,
        order
    })
}