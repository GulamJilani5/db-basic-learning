///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////// EXPRESS - nodejs framework.
////////////

const express = require('express');
const bodyParser = require('body-parser');
console.log('app')
const app = express();
// Middleware that is used to parse incoming JSON data from HTTP request bodies eg req.body.
// JSON data to javascript object
app.use(express.json());
//app.use(bodyParser.json());
//////////////////////////////////////////////////////////////
////////////ROUTING
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


// // Listening to incoming request
// app.listen(port, ()=>{
//     console.log(`App running on port ${port}`)
// })

module.exports = app;


