const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,500,50,300);
	ground = new Ground(400,650,850,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
	tree.display();
	ground.display();
	

  drawSprites();
 
}



