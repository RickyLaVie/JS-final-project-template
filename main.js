var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";
var buttonImg = document.createElement("img");
buttonImg.src = "images/tower-btn.png";
var tower = {
   x: 543,
   y: 75
};
var btn = {
   x:576,
   y:416
};
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

$("#game-canvas").mousemove(function(event){
   console.log("x:" + event.offsetX + ",y:" + event.offsetY);
});

$("#game-canvas").on("mousemove",function(event){
   cusor = {
     x: event.offsetX,
     y: event.offsetY
   };
});

function draw(){
   
   ctx.drawImage(bgImg,0,0);
   ctx.drawImage(enemyImg,enemy.x,enemy.y);
   ctx.drawImage(buttonImg,btn.x,btn.y,65,65);
}

function clickBtn(){
   ctx.drawImage(towerImg,cursor.x,cursor.y);
}

$("#button").on("click",clickBtn);


// draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
setInterval(draw, 16);
