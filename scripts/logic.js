var animalArray = ["squirrel", "zebra", "rabbit", "koala", "monkey", "giraffe", "parrot", "elephant"];


class Tile {
  constructor() {
    this.hidden = true;
    this.content;
  }
}


// Creating an array of Tile objects
var tilesList = [];

for (var i = 0; i < animalArray.length; i++) {
  var key = new Tile();
  key.content = animalArray[i];
  var key2 = jQuery.extend(true, {}, key);
  tilesList.push(key);
  tilesList.push(key2);
}


class Game {
    
  constructor() {
      
    this.tiles = this.randomizeTiles();
    this.visibleActiveTiles = [];
    this.tilesFlipped = 0;
    
  }


  // This method resets the game to default mode and randomize the tiles.
  newGame() {
      
    $(".tile").remove();
    this.tiles = this.randomizeTiles();
    this.visibleActiveTiles = [];
    this.tilesFlipped = 0;
    this.setHidden();
    this.drawTiles();
    registerTileClick();
    
  }
 
 
  // This method is used in this.newGame() to set all the tiles to hidden.
  setHidden() {
      
      for (var i = 0; i < this.tiles.length; i++) {
          this.tiles[i].hidden = true;
      }
      
  }


  randomizeTiles() {
      
    return tilesList.sort(function() {
      return 0.5 - Math.floor(Math.random() * 16);
    });
    
  }


  checkHidden(i) {
      
    return this.tiles[i].hidden === true;
    
  }
  
  
  // This method handles each move and the logic behind the game.
  play(i) {
  
  	if (this.checkHidden(i) === true) {
  	    
    	this.tiles[i].hidden = false;
        this.visibleActiveTiles.push(this.tiles[i]);
        
      if (this.visibleActiveTiles.length === 2) {
      
      	if (this.visibleActiveTiles[0].content === this.visibleActiveTiles[1].content) {
      	    
          this.tilesFlipped += 2;
          this.visibleActiveTiles = [];
          this.hasEnded();
          
        } else if (this.visibleActiveTiles[0].content !== this.visibleActiveTiles[1].content) {
            
          this.visibleActiveTiles[0].hidden = true;
          this.visibleActiveTiles[1].hidden = true;
          this.visibleActiveTiles = [];
          
        }
      }
    }
  }
   
  
  hasEnded() {
      
    if (this.tilesFlipped === 16) {
      alert("Congratulations! You have found all pairs");
      this.newGame();
    }
    
  }


  // This method creates HTML divs elements representing the Tile objects.
  drawTiles() {
      
        for (var i = 0; i < this.tiles.length; i++) {
        $("#board").append($('<div class="tile hidden ' +this.tiles[i].content + '" id=' + i + '></div>'));
	   }
	   
    }

  // This method is called after each move to redraw HTML tiles updated from JavaScript file.
  redraw() {

        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].hidden) {
                $("#" + i).addClass('hidden');
            } else {
                $("#" + i).removeClass('hidden');
            }
        }
    }
    
    
  // This method is called when an element is clicked, creating tile-appearance effect.
  timeOut(i) {
        $("#" +i).removeClass('hidden');
    }
}


// Linking JS with HTML
var ng = new Game();

function registerTileClick() {
    
    $(".tile").click(function() {
        
      	var id = $(this).attr('id');
      	ng.timeOut(id);

        setTimeout(function(){
            ng.play(id);
            ng.redraw();   
        }, 500);
        
     });
}

$(document).ready(function(){
    
    ng.drawTiles();
    registerTileClick(); 
    $("#reset").click(function() {
        ng.newGame();
    });
    
});


 