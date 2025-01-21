const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files (optional, for CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a basic index route
app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});