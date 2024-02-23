// restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/byRadius', authMiddleware.authenticateUser, restaurantController.getRestaurantsByRadius);
router.get('/byMinMax', authMiddleware.authenticateUser, restaurantController.getRestaurantsByMinMaxDistance);

module.exports = router;
