var db;
var form,player,game;
var playerCount;
var gameState=0;
var allPlayers;

var cars,car1,car2,car3,car4;

var distance=0;

var carsAtEnd;

function preload(){

car1Img=loadImage("images/car1.png");
car2Img=loadImage("images/car2.png");
car3Img=loadImage("images/car3.png");
car4Img=loadImage("images/car4.png");
groundImg=loadImage("images/ground.png");
trackImg=loadImage("images/track.jpg");

}

function setup(){
    db=firebase.database();
    createCanvas(windowWidth,windowHeight);
   game=new Game();
   game.getState();
   game.start();
}

function draw(){
    if(playerCount==4){
        game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
    if(gameState===2 && carsAtEnd===4 ){
      game.end();
    }
  
  //  drawSprites();

}

