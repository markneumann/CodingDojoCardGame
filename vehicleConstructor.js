// a function that takes in some information about the vehicle to create
function vehicleConstructor(name, numWheels, numPass) {
var vehicle = {};     // here we create the object that will eventually be our Ninja
vehicle.name = name;
vehicle.numWheels = numWheels;
vehicle.numPass = numPass;
vehicle.makeNoise = function() {
  console.log("vroom!");
};
return vehicle;       // return the object
}

 // Create the bike
var Bike = vehicleConstructor("Bike",2,1);
Bike.makeNoise = function() {
  console.log("Ring! Ring!");
};
Bike.makeNoise();
// Create the sedan
var Sedan = vehicleConstructor("Sedan",4,4);
Sedan.makeNoise = function() {
  console.log("Honk! Honk!");
};
Sedan.makeNoise();
// Create the bus
var Bus = vehicleConstructor("Bus",6,20);
Bus.AddPassengers = function(numPassAdd) {
  Bus.numPass += numPassAdd;
  console.log("number of passengers is now " + Bus.numPass);
};
Bus.makeNoise();
Bus.AddPassengers(4);
