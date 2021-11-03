// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    const newArray = [array[0], array[1]]
    return newArray
}

const returnLastTwoDrivers = function(array) {
    const newArray = [array[array.length-2], array[array.length - 1]];
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function fare(fare){
        return fare * x
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    } 
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
}


