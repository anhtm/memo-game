var cardArray = ['tiger', 'tiger', 'zebra', 'zebra', 'rabbit', 'rabbit', 'koala', 'koala',
  'monkey', 'monkey', 'giraffe', 'giraffe', 'parrot', 'parrot', 'elephant', 'elephant'];

class Tile {
  constructor() {
    this.hidden = true;
    this.content
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


// implement
var ng = new Game();
var cards = ng.tiles;

//TEST IMAGES
$("#0, #1").click(function() {
    $(this).addClass("squirrel");
});

$("#2, #3").click(function() {
    $(this).addClass("zebra");
});

$("#4, #5").click(function() {
    $(this).addClass("parrot");
});

$("#6, #7").click(function() {
    $(this).addClass("elephant");
});

$("#8, #9").click(function() {
    $(this).addClass("giraffe");
});

$("#10, #11").click(function() {
    $(this).addClass("koala");
});

$("#12, #13").click(function() {
    $(this).addClass("rabbit");
});

$("#14, #15").click(function() {
    $(this).addClass("monkey");
});


$("#reset").click(function() {
    $(".tile").removeClass().addClass("tile");
});

// shuffle the tiles
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);

$('td').shuffle();


// Check Pair

//var visibleTiles = [],
//    match = 0;
//    
//function clickTile() {
//    var $selected = $(".tile")
//    $selected.each(function() {
//        $(this).click(function() {
//            visibleTiles.push($(this));
//        });
//    }
//}












