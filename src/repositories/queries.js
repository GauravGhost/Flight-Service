function addRowLockOnFlights(flightId){
    return  `select * from flights WHERE flights.id = ${flightId} FOR UPDATE;`
}


module.exports = {
    addRowLockOnFlights
}