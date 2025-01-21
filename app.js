const express = require('express');
const path = require('path');
const appRoutes = require('./routes/router');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files (optional, for CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/', appRoutes);

//Middleware for serving static assets from public directory
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});