// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(last){
    return last.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => fare => fare * multiplier;

const fareDoubler = createFareMultiplier(2);

const originalFare = 20; 
const doubledFare = fareDoubler(originalFare);
console.log(doubledFare); 

const fareTripler = createFareMultiplier(3);

const startingFare = 20;
const tripledFare = fareTripler(startingfare);
console.log(tripledFare); 

  function selectDifferentDrivers(last, selectionFunction) {
    return selectionFunction(last);
  }
  