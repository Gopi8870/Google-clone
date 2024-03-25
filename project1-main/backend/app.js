// call express here
const express=require('express');
// create app using express
const app=express();

// export this then only access from outside
module.exports=app;

const path=require('path');

const cors=require('cors');

// import dotenv and use the config in built method
// for accessing the config.env, we need path
// path is a inbuilt one which in node.js 
const dotenv=require('dotenv');

const connectDatabase=require('./config/connectDatabase');

// __dirname means actually starting point here 'backend'
dotenv.config({path:path.join(__dirname,'config/config.env')});

// access the router within app.js
const products=require('./routes/product');
const orders=require('./routes/order');

// connectDatabase method is called from connectDatabase.js
connectDatabase();

app.use(express.json());

app.use(cors());

// prefix path will be set in app.js
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

// process.env is a inbuilt one which is used for access 
// the environment variable
app.listen(process.env.PORT,()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})