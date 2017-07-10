var cardArray = ['tiger', 'tiger', 'zebra', 'zebra', 'crocodile', 'crocodile', 'koala', 'koala',
									'hippo', 'hippo', 'giraffe', 'giraffe', 'parrot', 'parrot', 'elephant', 'elephant'];

var defaultBoard = [['-','-','-','-'],['-','-','-','-'],['-','-','-','-'],['-','-','-','-']]

var shuffledArray = function() {
	cardArray.sort(function() {
	return 0.5 - Math.floor(Math.random()*16);
})
};

class Tile() {
	constructor() {
	    this.hidden = true;
	    this.content;
	}
	
	getContent() {
	    this.content = cardArray
	}
}

class Board() {
    constructor() {
        this.board = defaultBoard;
        this.match = 0;
    }
    
    for (var i = 0; i < this.board.length; i++) {
  	 for (var j = 0; j < this.board[i][j].length; j++) {
    	this.board[i][j] = new Tile;
         }
    }
  
    play() {
  	     var selected = this.board[x][y];
  	     selected = shuffledArray[x][y];
         selected.hidden = false;
         return selected;
    }

    checkPair() {
  	    var spot1 = Board.play();
        var spot2 = Board.play();
        if (spot1 != spot2) {
    	spot1.hidden = true;
        spot2.hidden = true;
        } else {
    	   match++;
        }
    
  }
  
    
   hasEnded() {
   	if (match = 8) {
    	alert("Congratulations!");
      this.board = ;
      
    }
   }
  }
}
