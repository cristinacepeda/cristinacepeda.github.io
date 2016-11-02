$(document).ready(function() { //always do this first. A special event 

  //function calls
  drawGridObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#FAA595');
  });

  //below here are all my functions ------------------------------
  function drawRandomObject(){
    //store random value between 0 to 100 to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var color ="#000";
    if (ry < 50) {
      //ry is smaller than 50 = above the half
      color = "pink";
    }
    else if (rx < 25){
    //square is on the left, below the half
    color = "purple";
    }
    else if (rx < 75){
    //square is on the left, below the half
    color = "green";
    }
    else {
    //square is on the right, below the half
    color = "blue";
    }
    console.log("rx: " + rx + " ry: " + ry);
    $ ("body").append( "<div class='element random' style='left:" +
      rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );
  }

  function drawGridObject(){
    //append new element 200 times
    for (j = 0; j < 100; j++) {
      for (i = 0; i < 20; i++) { 
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }
});