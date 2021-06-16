var sea, ship, shipImage, seaImage
function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage(seaImage)
  sea.velocityX = -2
  sea.scale = 0.3
  ship = createSprite(200,180,40,40)
  ship.addAnimation("moving ship", shipImage)
  ship.scale = 0.25
   
}

function draw() {
  background(66, 135, 245);
  if(sea.x<0){
    sea.x = sea.width/8
  }
console.log(sea.x)
drawSprites()
}
