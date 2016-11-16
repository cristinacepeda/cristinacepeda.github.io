$(document).ready(function(){ 

  /* -------------------------------------------
  Code to run sequentially
  ----------------------------------------------- */
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=2f9905480c610b1c3a4033352536d721",function(result){
    var windSpeed = result.wind.speed;
    console.log("wind speed: "+ windSpeed + "meter/sec");
    drawGridObjects(windSpeed);
  });

  setInterval(function(){
  rotateGridObjects();
  //console.log("function is running");
  }, 1000);
  drawRandomObject();

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#ff3151');
  });





  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */
  function drawGridObjects(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) { 
        $("body").append( "<div class='element' style='right:" + i*5 + "vw; top:" + j*20 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100); //random height
    var ry = Math.floor(Math.random()*100); //random width
    var rw = Math.floor(Math.random()*100); //random width
    var rh = Math.floor(Math.random()*100); //random height
    var c = "#000";
    if (ry < 10) {
      //ry is smaller than 50 = above the half
      color = "white";
    }
    else if (rx < 10){
      //circle is on the left, below the half
      color = "blue";
    }
    else if (rx < 50){
      //circle is on the left, in the middle
      color = "white";
    }
    else {
      //circle is on the right, below the half
      color = "blue";


    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + "; width:" + rw + "px; height:" + rh + "px;'></div>" );
  }
  function rotateGridObjects(){
  //getting the time
  var now = new Date();
  var second = now.getSeconds();
  //console.log("currently: " + second);

  //rotating the elements
  $('.element').css('transform','rotate(' + second + 7 + 'deg)');
    //console.log("degress:" + second + 6);
  }
});