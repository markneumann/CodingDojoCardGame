// a function that takes in some information about the vehicle to create
function vehicleConstructor(name, numWheels, numPass, speed) {
//PRIVATE
var distance_traveled = 0;
var updateDistanceTraveled = function(){
  distance_traveled += speed;
};
//Public
this.name = name;
this.numWheels = numWheels;
this.numPass = numPass;
this.speed = speed;
this.makeNoise = function() {
  console.log("vroom!");
};
this.move = function(){
  updateDistanceTraveled();
  this.makeNoise();
};
this.checkMiles = function(){
  console.log("distance traveled = " + distance_traveled);
};
}

 // Create the bike
var Bike = new vehicleConstructor("Bike",2,1,5);
Bike.makeNoise = function() {
  console.log("Ring! Ring!");
};
Bike.move();
Bike.checkMiles();
// Create the sedan
var Sedan = new vehicleConstructor("Sedan",4,4, 40);
Sedan.makeNoise = function() {
  console.log("Honk! Honk!");
};
Sedan.move();
Sedan.checkMiles();
// Create the bus
var Bus = new vehicleConstructor("Bus",6,20,30);
Bus.AddPassengers = function(numPassAdd) {
  Bus.numPass += numPassAdd;
  console.log("number of passengers is now " + Bus.numPass);
};
Bus.move();
Bus.checkMiles();
Bus.AddPassengers(4);
