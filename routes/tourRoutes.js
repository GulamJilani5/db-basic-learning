const express = require('express');

const tourController = require('./../controllers/tourController');

const router = express.Router();

//////////////////////////////////////////////////////////////
////////////ROUTING
// const express = require('express');
// const app = express();
// const app = require('./app');
// app.get(route, handler) // route = path, handler = callback function
// app.use(route, handler) // handler = middleware
// app.get('/', (req, res)=>{
//     // res.status(200).send('Hello form the server side')
//     res.status(200).json(           // It will automatically set content-type as application/json and charset as utf-8
//         {message : 'Hello form the server side.',
//         app: 'Learning basics of db.'
//     })
// })
// app.post('/', (req, res)=>{
//     res.send('You can post to this URL or endpoint')
// })

console.log('tourRoute');
router.route('/').get(tourController.getAllTours).post(tourController.createTour);

router.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);


module.exports = router;