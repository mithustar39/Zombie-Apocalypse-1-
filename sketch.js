var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var alien, alienImg;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  zombieImg = loadImage("assets/zombie.png");

  alienImg = loadImage("assets/alien.png");

  bgImg = loadImage("assets/bg.jpeg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

  

 
}

function draw() {
  background(0); 
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnAliens();
spawnZombies();

drawSprites();

}
 function spawnZombies(){
  if(frameCount%100 === 0){
  zombie = createSprite(random(700,1000), random(150,550), 20, 20);
  zombie.addImage("zombie",zombieImg);
  zombie.scale=0.15;
  zombie.velocityX = -3;
  }
}

 function spawnAliens(){
  if(frameCount%200 === 0){
  alien = createSprite(random(900,1200),random(200,400), 20, 20);
  alien.addImage("alien",alienImg);
  alien.scale=0.6;
  alien.velocityX = -5;
  }
 }