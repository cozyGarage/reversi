// Import the Express module
var express = require('express');

// Create a new instance of an Express Router
var router = module.exports =  express.Router();

/* GET home page. */
// Define a route handler for the GET request method on the root path ("/")
router.get('/', function(req, res, next) {
  // Render the "index" view template and pass in an object with a title property set to "Express"
  res.render('index', { title: 'Express' });
});


