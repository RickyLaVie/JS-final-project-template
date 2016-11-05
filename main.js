var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var FPS = 60;

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerImg = document.createElement("img");
towerImg.src = "images/Magma.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";
var buttonImg = document.createElement("img");
buttonImg.src = "images/tower-btn.png";

var enemyPath = [
   {x:96, y:63},    // ---> enemyPath = [0];
   {x:384, y:63},   // ---> enemyPath = [1];
   {x:384, y:192},  // ---> enemyPath = [2];
   {x:224, y:192},  // ---> enemyPath = [3];
   {x:224, y:320},  // ---> enemyPath = [4];
   {x:544, y:320},  // ---> enemyPath = [5];
   {x:544, y:97},   // ---> enemyPath = [6];
];

var enemy = {
   pathDes:0,  // -----is equal to-----> enemy.pathDes = 0;
   x: 96,
   y: 400,
   speedx:0,
   speedy:-64,
   speed:64,
   move: function(){
      if(isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y,this.x,this.y, this.speed/FPS, this.speed/FPS)){
         console.log("gogog")}
      this.x=enemyPath[this.pathDes].x;
      this.y=enemyPath[this.pathDes].y;
      this.pathDes++; // 使array裡的數字+1  ；即 [0]--(+1)-->[0+1]--->[1]
      if (this.x>enemyPath[this.pathDes].x){
         this.speedx=-64;
         this.speedy=0;
      }
      else if (this.x<enemyPath[this.pathDes].x){
         this.speedx=64;
         this.speedy=0;
      }
      else if (this.y<enemyPath[this.pathDes].y){
         this.speedx=0;
         this.speedy=64;
      }
//       else if (this.y>enemyPath[this.pathDes].y){
//          this.speedx=0;
//          this.speedy=-64;
//       }
      else {
         this.speedx=0;
         this.speedy=-64;
      }
      else {
         this.x=this.x+this.speedx/FPS;
         this.y=this.y+this.speedy/FPS;
      }
   }
   
};

var btn = {
   x:576,
   y:416
};

function draw(){
   enemy.move();
   ctx.drawImage(bgImg,0,0);
   ctx.drawImage(enemyImg,enemy.x,enemy.y);
   ctx.drawImage(buttonImg,btn.x,btn.y,65,65);
   if(isBuilding){
      ctx.drawImage(towerImg,cursor.x,cursor.y,32,32);
   }
   ctx.drawImage(towerImg,tower.x,tower.y,32,32);
}

var isBuilding = false;
var tower = {};
var cursor = {};
$("#game-canvas").on("click", function(){
   if( isCollided(cursor.x,cursor.y,640-64, 480-64, 64, 64)){
      if(isBuilding){
         isBuilding = false;
      }
      else{
         isBuilding = true;
      }
   }
   else if(isBuilding){
      tower.x =cursor.x-cursor.x%32;
      tower.y =cursor.y-cursor.y%32;
      isBuilding = false;
   }
});

$("#game-canvas").on("mousemove",function(event){
   cursor = {
     x: event.offsetX,
     y: event.offsetY
   };
});


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

setInterval(draw, 1000/FPS);

// function clickBtn(){
//    ctx.drawImage(towerImg,cursor.x,cursor.y);
// }

// $("#button").on("click",clickBtn);


// draw();
//「setTimeout(draw, 1000);」=「setInterval(draw, 16);」
// var FPS = 60;
// setInterval(draw, 1000/FPS);
