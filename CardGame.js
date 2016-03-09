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
  });
});

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

};

deck.prototype.return = function() { //need the card to add to the end

};

//player
function player(name ) {
  this.name = name;
  this.hand = [];

  player.prototype.take = function() { // call the deck deal method, update hand
    alert("Take Button Clicked");

  };

  player.prototype.discard = function() { //call the deck return

  };
}

var aDeck = new deck();
console.log(aDeck);
