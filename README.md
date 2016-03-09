## Synopsis

Day 2 exercise to create a Card Game.   This game (thinking of calling it CardSpy), displays the dealers deck, then lets you add players and displays their hands as they take and discard cards, reducing the size of the dealers deck.

## Background

To get started, I searched for existing Javascript card games and found http://devdojo.com/post/create-a-deck-of-cards-in-javascript
which gave me a framework with a constructor for the deck and a shuffle funcion.   From that I have started to flesh out

## Current started

When loading the page, the deck of cards is shown, along with buttons to shuffle and reset and add a player.

When you add a player, a new Div is created below the dealer deck, with two buttons Take (a card) and Discard (a Card).   When you take a card, it redraws the dealer deck with one less card, and shows that card in the Player area.

At least it does if I hardcode one player ':-('

BUT, when I create the Take and Discard buttons dynamically with the Add Player function, I don't have a way to bind the new DOM elements to the Take and Discard functions.

If you look at the code, you will see the #take and #discard hooks, but obviously, I need to have different hooks for each player I add.

HELP!
