const express = require('express');
const app = express();
const port = 3000;

// Define a route to serve your web page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Simple Web Page!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});