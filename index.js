// server.js
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

const authRoutes = require("./src/routes/authRoutes")
const { connection } = require('./src/config/db');
const restaurantRoutes=require("./src/routes/restaurantRoutes")
// Middleware
app.use(bodyParser.json());

const port = process.env.PORT;

app.get('/', async (req, res) => {
   res.send("welcome")
});

app.use('/auth', authRoutes);
app.use('/restaurants', restaurantRoutes);

app.listen(port, async () => {
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running at the port: ${port}`);
});