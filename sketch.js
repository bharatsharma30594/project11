var shipImg,ship,seaImage,sea;
function preload(){
shipImg=loadImage("ship-1.png")
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(100,250,50,50)
ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea=createSprite(100,250,50,50)
sea.x=sea.width/2
sea.velocityX=-4
}

function draw() {
  background(seaImage);
drawSprites()
}