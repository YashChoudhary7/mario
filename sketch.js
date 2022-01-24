var backgroundImg, mario_Img, brick, snail, pipe, brick2, groundImg;
var mario, ground;

function preload(){
  mario_Img=loadImage("mario run.jpg");
groundImg=loadImage("ground mario.png");
backgroundImg=loadImage("b.png");
}

function setup() {
  createCanvas(1200,600);

 mario =  createSprite(80, 490, 50, 50);
 mario.addImage(mario_Img);
mario.scale = 0.3;
 ground = createSprite(600, 515, 1200, 15);
 //ground.visible = false;
 //ground.addImage(groundImg);
 //ground.scale = 0.3;
}
function draw() {
  background(backgroundImg); 
  ground.velocityX = -(6)
  
  if(keyDown("space") &&  mario.y>=465)  {
    mario.velocityY = -12;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  mario.velocityY = mario.velocityY + 0.5
  mario.collide(ground);

  
  drawSprites();
}