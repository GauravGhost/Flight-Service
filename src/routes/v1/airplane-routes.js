const express = require('express');
const router = express.Router();

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middleware');


// /api/v1/airplanes POST
router.post('/',
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplanes);

module.exports = router;