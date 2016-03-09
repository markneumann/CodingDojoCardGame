## Synopsis

Day 2 exercise to create a Card Game.   This game (thinking of calling it CardSpy), displays the dealers deck, then lets you add players and displays their hands as they take and discard cards, reducing the size of the dealers deck.

## Background

To get started, I searched for existing Javascript card games and found http://devdojo.com/post/create-a-deck-of-cards-in-javascript
which gave me a framework with a constructor for the deck and a shuffle funcion.   From that I have started to flesh out

## Current started

When loading the page, the deck of cards is shown, along with buttons to shuffle and reset and add a player.

When you add a player, a new Div is created below the dealer deck, with two buttons Take (a card) and Discard (a Card).   When you take a card, it redraws the dealer deck with one less card, and shows that card in the Player area.

## Future

By showing the dealer deck and all player hands, it might be possible to show the odds of different hands.  For example, the dealer deck could be hidden, then the user could attempt a pair, straight, flush.  And the program could show the odds of that hand.
