const express = require('express');
const router = express.Router();

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middleware');


// /api/v1/cities POST
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity)

// /api/v1/cities GET
router.get('/', CityController.getCities)

// /api/v1/cities/1 DELETE
router.delete('/:id', CityController.destoryCity)

// /api/v1/cities/:id PATCH
router.patch('/:id',
    CityMiddlewares.validateUpdateRequest,
    CityController.updateCity)

module.exports = router;