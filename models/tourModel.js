const mongoose = require('mongoose');

console.log('tourModel')

 //Defining schema 
 const tourSchema = new mongoose.Schema({
    name:{
      type:String,
      required: [true, 'A tour must have name'],
      unique: true,
    },
    rating:{
      type: Number,
      default: 4.5,
    },
    price:{
      type: Number,
      required: [true, 'A tour must have a price'],
    },
  })

  //Data Modelling
  const Tour = mongoose.model('Tour', tourSchema);  // A collection with the name 'tours' will be created.

  module.exports = Tour;




