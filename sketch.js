
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,stone1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,350,800,20);
stone1=new stone(300,350,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  stone1.display();
  drawSprites();
 
}



