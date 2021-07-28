
function preload(){
  shipAnimation = loadAnimation("ship-1.png,ship-2.png,ship-3.png");
  ship1=loadAnimation("ship-1.png")
  ship2=loadAnimation("ship-3.png")
  ship3=loadAnimation("ship-3.png")
  
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,200,20,20)
}

function draw() {
  background("blue");
 drawSprites();
}