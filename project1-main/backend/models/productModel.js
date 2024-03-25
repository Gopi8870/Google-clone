// using mongoose only,we can create model
const mongoose=require('mongoose');

// call the constructor for Schema and pass the objects as parameter
// finally save it in one variable(productSchema)
const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    // more than one images for same product possible
    // so keep it as array
    // within the array give each image as object
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numberOfReviews:String,
    createdAt:Date
});

// must create the model by using that created schema
const productModel=mongoose.model('Product',productSchema);

module.exports=productModel;