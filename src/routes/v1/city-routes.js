const express = require('express');
const router = express.Router();

const { CityController } = require('../../controllers');
// const { AirplaneMiddlewares } = require('../../middleware');


// /api/v1/cities POST
router.post('/',
    CityController.createCity)


module.exports = router;