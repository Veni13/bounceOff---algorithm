var fixedRect, movingRect;
var fixedSquare,movingSquare;
function setup() {
  createCanvas(1200,800);
  fixedSquare = createSprite(400,110,50,50);
  fixedSquare.shapeColor = "red";
  fixedSquare.debug = true;
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingSquare = createSprite(400,500,80,80);
  movingSquare.shapeColor = "red";
  movingSquare.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 
}
function draw() {
  background(0,0,0);
  movingSquare.x = World.mouseX;
  movingSquare.y = World.mouseY;

  if (isTouching(movingSquare,fixedSquare)) {
    movingSquare.shapeColor = "yellow";
    fixedSquare.shapeColor = "yellow";
  }
  else{
    movingSquare.shapeColor = "red";  
    fixedSquare.shapeColor = "red";
     
  }


  bounceOff ();
  drawSprites();
}
