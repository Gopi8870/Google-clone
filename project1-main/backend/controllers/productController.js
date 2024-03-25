// import productModel from productModel.js
const productModel=require('../models/productModel');

// this function used in another files
// arrow function used here
// response will be json file is returned

// Get products API - /api/v1/products
exports.getProducts = async (req,res,next)=>{

    const query=req.query.keyword?{name:{
        $regex: req.query.keyword,
        $options:'i'
    }}:{}
    // find() used for finding all the rows
    // it is asynchronus method which means not related to time
    // sometime output may be delay so use 'await' keyword to solve this issue
    const products=await productModel.find(query);

    // json file returned as a output which is returned from db
    res.json({
        success:true,
        products
    })
}

// Get Single product API - /api/v1/product/:id
exports.getSingleProduct= async (req,res,next)=>{

    // for accessing the id from db model
    // use req.params.id which is inbuilt one

    // if suppose the id not present in database then the app is crashed
    // to avoid this use try catch block
    
    try{
        const product=await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:'pls enter the correct id'
        })
    }
   
}