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
		var key = 'tile' + (i + 1);
    this[ key ] = new Tile;
    this[ key ].content = cardArray[i];
    tilesList.push(key);
}


class Board {
    constructor() {
        this.game = this.getBlankBoard();
        this.tiles = this.setTiles();
        this.match = 0;
    }
  	
    getBlankBoard() {
    	return ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];
    }
    
    setTiles() {
    	return tilesList.sort(function() {
			return 0.5 - Math.floor(Math.random()*16);
		});
    }
    
  //TODO: Link the tiles(this.tiles) with the board(this.game)
  
    play(i) {
    		var selected = this.tiles[i];
        selected.hidden = false;
        return selected;
    }

    checkPair(a,b) {
  	    var spotA = this.play(a);
        var spotB = this.play(b);
        if (spotA.content != spotB.content) {
    			spotA.hidden = true;
        	spotB.hidden = true;
        } else if (spotA.content == spotB.content) {
    	   	match++;
        }
  	}
   
   hasEnded() {
   	if (match == 8) {
    	alert("Congratulations!");
      this.game = this.getBlankBoard();
      this.tiles = this.setTiles();
      this.match = 0;
    }
   }
  
}
