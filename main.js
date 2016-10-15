var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var bgImgTower = document.createElement("imgt");
bgImgTower.src = "images/tower.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

function draw(){
   
   ctx.drawImage(bgImg,bgImgTower,0,0);
}

draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
setInterval(draw, 16);
