var cardArray = ['tiger', 'tiger', 'zebra', 'zebra', 'crocodile', 'crocodile', 'koala', 'koala',
  'hippo', 'hippo', 'giraffe', 'giraffe', 'parrot', 'parrot', 'elephant', 'elephant'
];

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
    this.board = this.getBlankBoard();
    this.tiles = this.setTiles();
    this.visibleTiles = [];
    this.tilesFlipped = 0;
  }

  newGame() {
    this.board = this.getBlankBoard();
    this.tilesFlipped = 0;
  }

  getBlankBoard() {
    return ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
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
    } else {
      alert("This spot is already openned!");
      return false;
    }
  }

  checkPair(a, b) {
    if (this.play(a) && this.play(b)) {
      if (this.tiles[a].content === this.tiles[b].content) {
        this.tilesFlipped += 2;
        this.visibleTiles === [];
      } else {
        this.tiles[a].hidden = true;
        this.tiles[b].hidden = true;
        this.visibleTiles === [];
      }
    }
  }

  hasEnded() {
    if (this.tilesFlipped === 16) {
      alert("Congratulations! The board will be reset.");
      this.newGame();
    }
    return false;
  }

}
