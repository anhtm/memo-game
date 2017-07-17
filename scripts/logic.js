var urlArray = [
  ["squirrel", "https://image.flaticon.com/icons/png/512/26/26098.png"],
  ["zebra", "https://d30y9cdsu7xlg0.cloudfront.net/png/115587-200.png"],
  ["rabbit", "https://maxcdn.icons8.com/Share/icon/ios7/Holidays//easter_rabbit1600.png"],
  ["koala", "https://d30y9cdsu7xlg0.cloudfront.net/png/176779-200.png"],
  ["monkey", "https://www.shareicon.net/download/2016/01/17/704525_zoo_512x512.png"],
  ["giraffe", "https://image.flaticon.com/icons/png/512/12/12606.png"],
  ["parrot", "https://www.shareicon.net/download/2016/11/28/857811_bird_512x512.png"],
  ["elephant", "https://d30y9cdsu7xlg0.cloudfront.net/png/14048-200.png"],
];

class Tile {
  constructor() {
    this.hidden = true;
    this.content;
    this.url;
  }
}

var tilesList = [];

for (var i = 0; i < urlArray.length; i++) {
  var key = new Tile();
  key.content = urlArray[i][0];
  key.url = urlArray[i][1];
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

  newGame() {
    $(".tile").remove();
    this.tilesFlipped = 0;
    this.visibleActiveTiles = [];
    this.tiles = this.randomizeTiles();
    this.setHidden();
    this.drawTiles();
    registerTileClick();
  }
  
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


  play(i) {
  
  	if (this.checkHidden(i) === true) {
    	this.tiles[i].hidden = false;
        this.visibleActiveTiles.push(this.tiles[i]);
        //$("#" + i).removeClass("hidden");
      if (this.visibleActiveTiles.length === 2) {
      
      	if (this.visibleActiveTiles[0].content === this.visibleActiveTiles[1].content) {
          this.tilesFlipped += 2;
          //alert("You have found a pair!");
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
   
  
  checkHidden(i) {
    return this.tiles[i].hidden === true;
  }
  
  
  hasEnded() {
    if (this.tilesFlipped === 16) {
      alert("Congratulations! You have found all pairs");
      this.newGame();
    }
  }

  drawTiles() {
        for (var i = 0; i < this.tiles.length; i++) {
        $("#board").append($('<div class="tile hidden ' +this.tiles[i].content + '" id=' + i + '></div>'));
	}
    }
    
  redraw() {

        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].hidden) {
                $("#" + i).addClass('hidden');
            } else {
                $("#" + i).removeClass('hidden');
            }
        }
    }
    
    timeOut(i) {
        $("#" +i).removeClass('hidden');
    }
}

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


 