var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";
var buttonImg = document.createElement("img");
buttonImg.src = "images/tower-btn.png";
var enemy = {
   x: 96,
   y: 400
};
var btn = {
   x:576,
   y:416
};

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

$("#game-canvas").on("mousemove",function(event){
   cursor = {
     x: event.offsetX,
     y: event.offsetY
   };
});

$("#game-canvas").on("click", function(){
   if( isCollided(cursor.x,cursor.y,640-65, 380-65, 65, 65

function draw(){
   
   ctx.drawImage(bgImg,0,0);
   ctx.drawImage(enemyImg,enemy.x,enemy.y);
   ctx.drawImage(buttonImg,btn.x,btn.y,65,65);
   ctx.drawImage(towerImg,cursor.x,cursor.y);
}


function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight) {
    if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
    ){
        return true;
    } else {
        return false;
    }
}


// function clickBtn(){
//    ctx.drawImage(towerImg,cursor.x,cursor.y);
// }

// $("#button").on("click",clickBtn);


// draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
setInterval(draw, 16);
// setInterval(draw, 1000/FPS);
