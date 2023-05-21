const { StatusCodes } = require("http-status-codes");
const { AirportService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 *  POST : /Airports
 *  req-body {name: "IGI", cityId: 5, code: "DEL"}
 */


async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

/** 
 * GET : /airports
 * req-body {}
 */

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/** 
 * POST : /airports/:id 
 * req-body {}
 * req-params {id}
 */

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/** 
 * DELETE : /airports/:id
 * req-body {}
 */

async function destoryAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/** 
 * PATCH : /Airports/:id
 * req-body {}
 */

async function updateAirport(req, res) {
    try {
        const Airports = await AirportService.updateAirport(req.params.id, {capacity: req.body.capacity});
        SuccessResponse.data = Airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destoryAirport,
    updateAirport
}