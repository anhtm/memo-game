var cardArray = ['tiger', 'tiger', 'zebra', 'zebra', 'crocodile', 'crocodile', 'koala', 'koala',
  'hippo', 'hippo', 'giraffe', 'giraffe', 'parrot', 'parrot', 'elephant', 'elephant'];

class Tile {
  constructor() {
    this.hidden = true;
    this.content;
  }
}

var tilesList = [];

for (var i = 0; i < 16; i++) {
  var key = new Tile;
  key.content = cardArray[i];
  tilesList.push(key);
}

class Game {
  constructor() {
    this.tiles = this.setTiles();
    this.visibleTiles = [];
    this.tilesFlipped = 0;
  }

  newGame() {
    this.board = this.getBlankBoard();
    this.tilesFlipped = 0;
  }

  setTiles() {
    return tilesList.sort(function() {
      return 0.5 - Math.floor(Math.random() * 16);
    });
  }

  checkHidden(i) {
    return this.tiles[i].hidden === true;
  }

  play(i) {
    if (this.checkHidden(i)) {
      this.tiles[i].hidden = false;
      this.visibleTiles.push(this.tiles[i]);
      alert('This spot is now open');
    }
  }

  checkPair(a, b) {
    if (this.checkHidden(a) === false && this.checkHidden(b) === false) {
      if (this.tiles[a].content === this.tiles[b].content) {
        this.tilesFlipped += 2;
        alert('You have found a pair!');
        this.visibleTiles = [];
      } else {
        this.tiles[a].hidden = true;
        this.tiles[b].hidden = true;
        this.visibleTiles = [];
      }
    } 
  }

  hasEnded() {
    if (this.tilesFlipped === 16) {
      alert("Congratulations! You have found all pairs");
      this.newGame();
    }
    return false;
  }

}
