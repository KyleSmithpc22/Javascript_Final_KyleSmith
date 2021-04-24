// This is a function that will shuffle the array given to it
function shuffles(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while ( 0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

    }

    return array;

}

// This is an array of strings that is every card that is needed for War
var cardNumbs = ["A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♦", "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♣"]

// This shuffles the cards in the array above to provide a random deck
shuffles(cardNumbs);

// This allows the array of cards to be set in strings
// but do to them being strings they have no true number value
// but this array using : allows for the strings to equal 
// the number provided for each string 
// for example "2♠": 2 is really just a two
// as long as the code is told to check the
// cardTrueValue array.
const cardTrueValue = {"2♠": 2, "2♣": 2, "2♥": 2, "2♦": 2, "3♠": 3, "3♣": 3, "3♥": 3, "3♦": 3, "4♠": 4, "4♣": 4, "4♥": 4, "4♦": 4, "5♠": 5, "5♣": 5, "5♥": 5, "5♦": 5, "6♠": 6, "6♣": 6, "6♥": 6, "6♦": 6, "7♠": 7, "7♣": 7, "7♥": 7, "7♦": 7, "8♠": 8, "8♣": 8, "8♥": 8, "8♦": 8, "9♠": 9, "9♣": 9, "9♥": 9, "9♦": 9, "10♠": 10, "10♣": 10, "10♥": 10, "10♦": 10, "J♠": 11, "J♣": 11, "J♥": 11, "J♦": 11, "Q♠": 12, "Q♣": 12, "Q♥": 12, "Q♦": 12, "K♠": 13, "K♦": 13, "K♥": 13, "K♦": 13, "A♠": 14, "A♣": 14, "A♥": 14, "A♦": 14}

// Below are the decks for both players they are set by taking half 
// of the cardNumbs array after the shuffles funtion is used on it
// to shuffle it

// Player 1s deck
P1 = cardNumbs.slice(0,26)
// Player 2s deck
P2 = cardNumbs.slice(26,52)

// This is the players points this will be used to see who wins at the end
player1Points = 0;
player2Points = 0;


// each player has 26 cards and so after 26 rounds we will have a winner
for(var rounds = 1; rounds <= 26; rounds++){

    // uses the pop to take the last part of the array and use it for the comparison
    displayNumbP1 = P1.pop();
    displayNumbP2 = P2.pop();

    // Says what round it is every round
    console.log(`ROUND ${rounds}`)
    
    // pretty standered if and if else statments that check to see if the poped player array values 
    // are equal, more or less then each other
    if(cardTrueValue[displayNumbP1] == cardTrueValue[displayNumbP2]){

        console.log(`Player ONE draws a ${displayNumbP1} and Player TWO draws a ${displayNumbP2}! ITS A DRAW`)

        console.log(`NO POINTS`)
    }

    else if(cardTrueValue[displayNumbP1] > cardTrueValue[displayNumbP2]){

        console.log(`Player ONE draws a ${displayNumbP1} and Player TWO draws a ${displayNumbP2}! Player ONE wins the round`)

        console.log(`ONE POINT TO PLAYER ONE`)

        player1Points++

    }

    else if(cardTrueValue[displayNumbP1] < cardTrueValue[displayNumbP2]){

        console.log(`Player ONE draws a ${displayNumbP1} and Player TWO draws a ${displayNumbP2}! Player TWO wins the round`)

        console.log(`ONE POINT TO PLAYER TWO`)

        player2Points++

    }
}

// a checker at the end to see who wins based of the amount of points each player has
if(player1Points == player2Points){
    console.log(`With both Players having ${player1Points} points its a TIE!`)

}
else if(player1Points > player2Points){
    console.log(`With ${player1Points} points Player 1 WINS!`)

}
else if(player1Points < player2Points){
    console.log(`With ${player2Points} points Player 2 WINS!`)

}