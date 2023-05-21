const express = require('express');
const router = express.Router();

const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middleware');


// /api/v1/airports POST
router.post('/',
        AirportMiddlewares.validateCreateRequest,
        AirportController.createAirport);

// /api/v1/airports GET
router.get('/',
        AirportController.getAirports);

// /api/v1/airport/:id GET
router.get('/:id',
        AirportController.getAirport);

// /api/v1/airport/:id DELETE
router.delete('/:id',
        AirportController.destoryAirport);

// api/v1/airport/:id PATCH
router.patch('/:id',
        AirportController.updateAirport);

module.exports = router;