var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var game="play"
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

    

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-27, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	c1 = new bucket(width/2,height-34,200,20)
c2 = new bucket(width/2-c1.width/2,height-80,15,100)
c3 = new bucket(width/2+c1.width/2,height-80,15,100)
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(game==="play"){
  packageSprite.x=helicopterSprite.x
  }
  c1.display();
  c2.display();
  c3.display();
  drawSprites();
 keyPressed();
 
}

function keyPressed() {
	if(game==="play"){
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
Matter.Body.setStatic(packageBody, false)
  game="a"
  }
}
  if (keyDown( RIGHT_ARROW)){
helicopterSprite.x=helicopterSprite.x+3

  }
  if(keyDown("left")){
helicopterSprite.x=helicopterSprite.x-3
  }
  
}



