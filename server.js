const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Recipe routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Recipes API is running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
