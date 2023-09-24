/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////.//// Using mongoose driver and connecting our nodejs with mongodb database(Hosted on cloud - atlas)
/////////// We are hosting our databse on Atlas cloud db

/////////////// Mongodb with Nodejs CRUD Operation Guide
//  https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial-3-3-2/?utm_source=Iterable&utm_medium=email&utm_campaign=campaign_6533760



//1) Connect to a MongoDB database hosted on MongoDB Atlas using mongoose driver
const mongoose = require('mongoose');

// import mongoose from 'mongoose';  // ES6 module import
const dotenv = require('dotenv');
const app = require('./app');
const router = require('./routes/tourRoutes')
dotenv.config({path: './config.env'});

 console.log('server')
//Database connection string
const DBConnectionString = process.env.DATABASE;
// console.log(DBConnectionString)
// We can pass hardcoded
// const DBConnectionString = 'mongodb+srv://gulamjilanicse:w1g72j5qUgiK3ClU@cluster0.hzaa03l.mongodb.net/first?retryWrites=true&w=majority'

// When we are exporting password and replacing in the db connection string
// const DBConnectionString = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD); 

//Connect to MongoDB using Mongoose driver
mongoose.connect(DBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }).then((con)=>{
    // console.log(con)
    console.log('Database Connection Successful!!!');
  }).catch((err)=>{
    console.log('DB connection error: ', err.message)
  });

 // Middleware 
  app.use('/api/v1/tours', router);
 
//2) Connect to a MongoDB database hosted on MongoDB Atlas using MongoDB driver

//3) Connect to a SQL database


//Listening to incoming request
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
    // console.log('Connection string: ',DBConnectionString)
})