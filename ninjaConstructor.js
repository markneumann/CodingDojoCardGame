function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this;
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("This is a private method for " + self.name);
    //console.log(this); // What will print here?
  };
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;


  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  };
}
var Andrew = new Ninja("Andrew", 24, "TFA Teacher");
Andrew.introduce();
