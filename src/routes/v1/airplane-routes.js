const express = require('express');
const router = express.Router();

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middleware');


// /api/v1/airplanes POST
router.post('/',
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get('/',
        AirplaneController.getAirplanes);

// /api/v1/airplane/:id GET
router.get('/:id',
        AirplaneController.getAirplane);

module.exports = router;