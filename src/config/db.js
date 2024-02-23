const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

Restaurant.collection.createIndex({ 'address.coord': '2dsphere' }, (err) => {
    if (err) {
        console.error('Error creating geospatial index:', err);
    } else {
        console.log('Geospatial index created successfully');
    }
});

const connection = mongoose.connection;

module.exports = { connection };
