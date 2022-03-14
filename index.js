//Import express library
const express = require('express');

//Create an express app
const app = express();



//Route to main directory will return a message to the user 'Hi Dan'
app.get('/', (req, res) => {
  res.send('Hi Dan. This is your REST API with Nodejs and Express.')
});


app.get('/api/courses', (req, res) => {
  res.send([1,2,3])
});

// Parameter create for the ID 
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
})


//Creates a listener on port 8080
app.listen('8080', () => {
  console.log('Listening on port 8080')
})