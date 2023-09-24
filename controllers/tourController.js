const Tour = require('./../models/tourModel');

console.log('tourController');

// CREATE
exports.createTour = async (req, res)=>{
    
//  console.log('Received request:', req);
//   console.log('Received JSON data:', req.body);
   // Method 1
    //Creating the document (Testing the tour)
     /* const testTour = new Tour({
      name:'The Forest Hiker',
      rating: 4.7,
      price: 5500,
   })*/
  //Saving(Inserting) the data into the database
     /*testTour.save().then(doc=>{
     console.log(doc)
  }).catch(err=>{
     console.log('ERROR',err)
  })*/
  //METHOD 2
  try {
    //   console.log('Received Parsed(into js object) JSON data:', req.body); //req.body is javascript object that is because of app.use(express.json())
      const newTour = await Tour.create(req.body);
    //   console.log('newTour data:', newTour);
       res.status(201).json({  // convert js object into json string
           status:'success',
           data:{
              tour: newTour   // We can only send data into json string not into javascript object
           }
       })
  } catch (err) {
    res.status(400).json({
        status:'fail',
        message: err.message,
    })
  }

}

//READ, QUERY, SEARCH  (Sorting, filtering, Aggregation etc.)!!!!MOST IMPORTANT

// Get all documents in a collection
exports.getAllTours = async (req, res)=>{
    try {
        const tours = await Tour.find(); // Return array of all the documents in a collection and convert them into js object
        res.status(200).json({
            status:'success',
            results: tours.length,
            data:{
                tours
            }
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error
        })
    }
}
// Get single document in a collection 
exports.getTour = async (req, res)=>{
    try {

        console.log('id', req.params.id)
        const tour = await Tour.findById(req.params.id);  // This is id we are using because in route we have used id
        // const tour = await Tour.findOne({_id: req.params.id})
        res.status(200).json({
            status:'success',
            data:{
                tour
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

// UPDATE
exports.updateTour = async (req, res)=>{
    try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{   // Only update the field which is provided in req.body and different from req.params.id
        new: true,    // true means this query will return new modified document.
        runValidators: true,
    })
        res.status(200).json({
            status:'success',
            data:{
                tour
            }
        })
        
    } catch (error) {
     res.status(404).json({
        status: 'fail',
        message: error,
     })   
    }
}
// DELETE
exports.deleteTour = async(req, res)=>{
    try { 
        const tour = await Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            data:{
                tour
            }
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error
        })
    }
}