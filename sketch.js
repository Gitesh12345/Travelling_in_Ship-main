var ship,ship1;
var sea , seal;


function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1=loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,500);
  
  //creating the sea
  sea=createSprite(600,300);
  sea.addAnimation("running",sea1)
  sea=scale=0.5;
    seavelocityX=-1;

  //creating the ship 
  ship=createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges=createEdgeSprites();

  // Adding Scale And Positionto ship
  ship.scale=0.25;
  ship.x=300;
  ship.y=300;
}

function draw() {
  background("blue");
  if(keyDown("enter")){
    ship.velocityX = 5;
  }

  if(keyDown("Left")){
    ship.velocityX = -5;
  }

  if(keyDown("space")){
    ship.velocityX = 0;
  }

  if(sea.x < 0){
     sea.x=sea.width/2;
  }
  //stop ship from falling down
  ship.collide(edges[3])
  drawSprites();
}