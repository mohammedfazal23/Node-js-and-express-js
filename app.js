const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const foodController = require('./controllers/foodController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.get('/food', foodController.getAllFoodItems);
app.get('/food/:id', foodController.getFoodItemById);
app.post('/food', foodController.createFoodItem);
app.put('/food/:id', foodController.updateFoodItem);
app.delete('/food/:id', foodController.deleteFoodItem);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));