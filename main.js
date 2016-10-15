var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

function draw(){
   
   ctx.drawImage(bgImg,0,0);
   ctx.drawImage(towerImg,0,0);
   ctx.drawImage(enemyImg,94,410);
}

// draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
setInterval(draw, 16);
