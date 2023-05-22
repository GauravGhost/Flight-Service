const { StatusCodes } = require('http-status-codes')

const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datetime-helpers');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        if (compareTime(data.departureTime, data.arrivalTime)) {
            throw new AppError('Departure and arrival time entry is wrong', StatusCodes.BAD_REQUEST);
        }
        return flight;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,

}