//Import express library
const express = require('express');

//Create an express app
const app = express();



//Route to main directory will return a message to the user 'Hi Dan'
app.get('/', (req, res) => {
  res.send('Hi Dan. This is new.')
});


//Creates a listener on port 8080
app.listen('8080', () => {
  console.log('Listening on port 8080')
})