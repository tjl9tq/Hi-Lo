## Hi-Lo
A simple card game built in TypeScript with React, Redux and Material UI. Bundled using webpack. To come: Unit Testing.

### To Demo
1. Run `npm i` to install the dependencies.
2. Run `npm start` to start run the app on `localhost:3000`

OR

click [here](https://www.timliu.me/hilo)

### How to Play
1. Hit DRAW CARD to start the game.
2. Player 1 goes first
3. Hit the up or down arrow to guess if the next card will be higher or lower than the current card. Click DRAW CARD again to lock in your guess.
4. If your guess was correct, you guess again. If your guess was incorrect, the number of cards in the pile gets added to your point total and the turn goes to Player 2.
5. If you make 3 correct guesses in a row, you may choose to make another guess or pass the turn over to the other player.
6. Suits are not taken into account for higher or lower cards. In the case two equal cards are drawn in a row, the pile count increases and you get to guess again.
7. At the last card of the deck, whichever player has fewer points wins.
