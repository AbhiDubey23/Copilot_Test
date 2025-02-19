// Create web server
// Create a route for /comments
// Return all comments in the database

// Import the express library
const express = require('express');
// Create an instance of express
const app = express();
// Import the comments.json file
const comments = require('./comments.json');

// Create a route for /comments
app.get('/comments', (req, res) => {
  // Return all comments in the database
  res.json(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});