const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a recipe name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  ingredients: {
    type: [String], // Array of strings
    required: [true, 'Please add at least one ingredient']
  },
  instructions: {
    type: String,
    required: [true, 'Please add cooking instructions']
  },
  preparationTime: {
    type: Number,
    required: [true, 'Please add preparation time in minutes']
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);