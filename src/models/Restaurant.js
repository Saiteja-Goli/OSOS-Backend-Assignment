const mongoose = require('mongoose');

// Define the schema for the restaurant data
const restaurantSchema = new mongoose.Schema({
    address: {
        building: { type: String },
        coord: { type: [Number] }, // Array of numbers [longitude, latitude]
        street: { type: String },
        zipcode: { type: String }
    },
    borough: { type: String },
    cuisine: { type: String },
    grades: [{
        date: { type: Date },
        grade: { type: String },
        score: { type: Number }
    }],
    name: { type: String },
    restaurant_id: { type: String }
});

// Create and export the model based on the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
