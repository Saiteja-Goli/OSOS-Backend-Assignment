// restaurantController.js
const Restaurant = require('../models/Restaurant');

// Controller function to get restaurants sorted by distance from given latitude and longitude within a specified radius
exports.getRestaurantsByMinMaxDistance = async (req, res) => {
    try {
        const { latitude, longitude, minDistance, maxDistance } = req.body;

        // Convert latitude, longitude, minDistance, and maxDistance to numbers
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
        const minDist = parseInt(minDistance);
        const maxDist = parseInt(maxDistance);

        // Perform geospatial query to find restaurants within the specified radius range
        const restaurants = await Restaurant.find({
            'address.coord': {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lng, lat] // Longitude, Latitude order
                    },
                    $minDistance: minDist,
                    $maxDistance: maxDist
                }
            }
        });

        res.json({ restaurants });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getRestaurantsByRadius = async (req, res) => {
    try {
        const { latitude, longitude, radius } = req.body;

        // Convert latitude, longitude, and radius to numbers
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
        const r = parseInt(radius);

        // Perform geospatial query to find nearby places within the specified radius
        const nearbyPlaces = await Restaurant.find({
            'address.coord': {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lng, lat] // Longitude, Latitude order
                    },
                    $maxDistance: r,

                }
            }
        });

        res.json({ nearbyPlaces });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}