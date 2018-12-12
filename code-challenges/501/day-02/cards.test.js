class Deck {
  constructor(data) {
    this.suites = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.faceCards = ['Jack', 'Queen', 'King', 'Ace'];
    this.numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  // method for constructing deck
  buildDeck() {
    let constructedDeck = [];
    let cards = this.faceCards.concat(this.numbers);
    this.suites.forEach((suit) => {
      cards.forEach((card)=> {
        constructedDeck.push(`${card} of ${suit}`)
      })
    })
    return constructedDeck;
  }

  // method for dealing deck
  // params should be number of cards in hand
  deal(cards, numPeople) {
    
  }

  // method for shuffling deck
  shuffle() {

  }
}

let d = new Deck();

console.log(d.buildDeck());


// model chess board