// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number for the server to listen on
const PORT = process.env.PORT || 3000;

// Serve static files from the '../client/dist' directory
app.use(express.static('../client/dist'));

// Parse incoming requests with urlencoded and JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require and use the htmlRoutes module, passing the express app instance
require('./routes/htmlRoutes')(app);

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
