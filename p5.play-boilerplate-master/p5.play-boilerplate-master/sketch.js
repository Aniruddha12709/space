function preload() {
bg = loadImage("images/ iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png", "images22.png");
eat = loadAnimation("images/eat.png");
drink = loadAnimation("images/drink.png");
move = loadAnimation("images/move.png");



}

  function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  // create sprite
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  astonaut = createEdgeSprite(astronaut.bounceoffedges);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing,brush");
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gyming,gym");
      astronaut.changeAnimation("gyming");
      astronaut.y = 350;
      astronaut.velocityX =0;
      astronaut.velocityY =0;
    }
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating,eat");
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityX =0;
      astronaut.velocityY =0;
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing,bath");
      astronaut.changeAnimation("bathing");
      astronaut.y = 350;
      astronaut.velocityX =0;
      astronaut.velocityY =0;
    }
    if(keyDown("M_KEY")){
      astronaut.addAnimation("moving,move");
      astronaut.changeAnimation("moving");
      astronaut.y = 350;
      astronaut.velocityX =0;
      astronaut.velocityY =0;
    }

  
}
