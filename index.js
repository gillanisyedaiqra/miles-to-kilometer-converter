// the conversion factor for miles to kilometer
let milesToKilometer = 1.60934;

// ask users for data in miles
let miles = prompt(" please enter the distance in miles");
console.log(miles, "miles");

//use the conversion factor to divide miles into kilometers
let kilometers = miles / milesToKilometer;
console.log(kilometers, "miles");
let distance =
  " the distance of " + kilometers + " kms is equal to " + miles + " miles ";
console.log(distance);
