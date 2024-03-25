
// connectDatabase.js is for connecting database with this project
// we can't directly do this connection
// for that purpose install mongoose

const mongoose=require('mongoose');

const connectDatabase=()=>{
    // after connecting db we need to print the message 
    // for checking the connectivity is done or not
    // con is a inbuilt variable which has connection property
    mongoose.connect(process.env.DB_URL,{
        // for working on only new version
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((con)=>{
        console.log('mongodb connected to host: '+con.connection.host);
    })
};

module.exports=connectDatabase;