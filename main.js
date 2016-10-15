var bgImg = document.createElement("img");
bgImg.src = "images/maps.png";
var canvas = document.getElementByld("game-canvas");
var ctx = canvas.getContext("2d");

function draw(){
   
   ctx.drawImage(bgImg,0,0);
}

draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
setInterval(draw, 16);
