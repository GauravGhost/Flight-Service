const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["FlightNumber not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.airplaneId) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["airplaneId found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.departureAirportId) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["departureAirport not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["arrivalAirportId not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.arrivalTime) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["arrivalTime not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.departureTime) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["departureTime not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.price) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["price not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.totalSeats) {
        ErrorResponse.message = "Something went Wrong while creating flight";

        ErrorResponse.error = new AppError(["totalSeats not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    
    next();
}




module.exports = {
    validateCreateRequest
}