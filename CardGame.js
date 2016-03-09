//Card Game - Day 2
window.onload = function() {
  showCards();
};

$(document).ready(function(){
  $("#doShuffle").click(function() {
    console.log("Shuffle Button Clicked");
    aDeck.shuffle(aDeck.cards);
  });

  $("#reset").click(function() {
    console.log("Reset Button Clicked");
    aDeck.reset();
    player1.reset();
  });

  $("#add").click(function() {
    console.log("Add Player Button Clicked");
    var newPlayer = prompt("Player Name?", "John"); // need to escape input
    newPlayer = new player(newPlayer); // and check for duplicate names
  });

  $("#take").click(function() {
    console.log("Take Button Clicked");
    newPlayer.take();
  });

  $("#discard").click(function() {
    console.log("Discard Button Clicked");
    var discardCard = prompt("Which card?", "1,2..");
    newPlayer.discard(discardCard);
  });
}); // end of document ready

//Draw the cards
var showCards = function(){
  var theCards = document.getElementById('theCards');
  theCards.innerHTML = '';
  for(var i=0; i < aDeck.cards.length; i++){
		div = document.createElement('div');
		div.className = 'card';
    var ascii_char;
		if(aDeck.cards[i].suit == 'Diamonds'){
			ascii_char = '&diams;';
		} else {
			ascii_char = '&' + aDeck.cards[i].suit.toLowerCase() + ';';
		}
		div.innerHTML = '' + aDeck.cards[i].name + '' + ascii_char + '';
		theCards.appendChild(div);
	}
};

//Draw the hand -- eventually need to refactor with showCards
var showHand = function(playername, theseCards){
  var theHand = document.getElementById(playername);
  theHand.innerHTML = '';
  console.log("theHand " + theHand);
  for(var i=0; i < theseCards.length; i++){
		div2 = document.createElement(playername + 'card');
		div2.className = 'card';
    var ascii_char;
		if(theseCards[i].suit == 'Diamonds'){
			ascii_char = '&diams;';
		} else {
			ascii_char = '&' + theseCards[i].suit.toLowerCase() + ';';
		}
		div2.innerHTML = '' + theseCards[i].name + '' + ascii_char + '';
    console.log("div2 is " + div2);
    theHand.appendChild(div2);
	}
};


//Cards
function card(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
}
// Deck
function deck(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds', 'Spades', 'Clubs'];
  this.cards = [];
  for( var i = 0; i < this.suits.length; i++) {
    for ( var j = 0; j < this.names.length; j++) {
      this.cards.push( new card(j+1, this.names[j], this.suits[i]));
    }
  }
}
deck.prototype.shuffle = function(o) {
  //console.log("called shuffle" + o);
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  showCards();
  return o;
};

deck.prototype.reset = function () { //need to m
  this.cards = [];
  for( var i = 0; i < this.suits.length; i++) {
    for ( var j =
       0; j < this.names.length; j++) {
      this.cards.push( new card(j+1, this.names[j], this.suits[i]));
    }
  }
  showCards();
};

deck.prototype.deal = function(name) { //need the player and hand, remove from top
  var newCard = aDeck.cards[0];
  console.log("dealt card = " + JSON.stringify(newCard));
  aDeck.cards.splice(0,1);
  console.log("cards left = " + aDeck.cards.length);
  showCards();    //remove card from deck
  return newCard;
};

deck.prototype.return = function() { //not sure if I should do this

};

//player
function player(name ) {
  this.name = name;
  this.hand = [];

  var thePlayers = document.getElementById('thePlayers');
  div3 = document.createElement('name');
  //div3.className = 'player';
  /*jshint multistr: true */
  div3.innerHTML =  '<h3>' + name + '</h3> \
    <div id = ' + name + ' style="width:650px; height:70px; display:block;"> \
    </div> \
    <button id= "'+ name + 'take">Take</button> \
    <button id= "'+ name + 'discard">Discard</button> \
    <hr>';
  thePlayers.appendChild(div3);
  this.addHandlerTake(name);
  this.addHandlerDiscard(name);

}


player.prototype.take = function() { // call the deck deal method, update hand
  //alert("Take Button Clicked");
  this.hand.push(aDeck.deal(name));
  console.log(name + " Hand is " + JSON.stringify(this.hand));
  showHand(name, this.hand);
};

player.prototype.discard = function(whichCard) { //call the deck return
  this.hand.splice(whichCard-1,1);
  showHand(name, this.hand);
};

player.prototype.reset = function() { //call the deck return
  this.hand = [];
  showHand(name, this.hand);
};

player.prototype.addHandlerTake =  function(name) {
  var _this = this;
  $("#" + name + "take").click(function() {
       console.log(name + "take button clicked");
       console.log(this);
       _this.take(name);
 });
};

player.prototype.addHandlerDiscard =  function(name) {
  var _this = this;
  $("#" + name + "discard").click(function() {
       console.log(name + "discard button clicked");
       var discardCard = prompt("Which card?", "1,2..");
       _this.discard(name);
 });
};

var aDeck = new deck();
//var player1 = new player('Frank');

console.log(aDeck);
