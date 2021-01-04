
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1;
var b2;
var b3;
var b4;
var b5;
var ground;
var c1,c2,c3,c4,c5;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(350, 200, 250,20);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	b1=new Paper(450,500,23);
	b1.shapeColor=color(221)
	World.add(world, b1);
	b2=new Paper(250,500,23);
	b2.shapeColor=color(0,255,221)
	World.add(world, b2);
	b3=new Paper(300,500,23);
	b3.shapeColor=color(0,255,221)
	World.add(world, b3);
b4=new Paper(350,500,23);
	b4.shapeColor=color(0,255,221)
	World.add(world, b4);
	b5=new Paper(400,500,23);
	b5.shapeColor=color(0,255,221)
	World.add(world, b5);
	c1= new Chain(b1.body,{x:450, y:200});
	World.add(world, c1);
	c2= new Chain(b2.body,{x:250, y:200});
	World.add(world, c2);
	c3= new Chain(b3.body,{x:300, y:200});
	World.add(world, c3);
	c4= new Chain(b4.body,{x:350, y:200});
	World.add(world, c4);
	c5= new Chain(b5.body,{x:400, y:200});
	World.add(world, c5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
c1.display();
c3.display();
c4.display();
c5.display();
c2.display();
  drawSprites();
  keyPressed();
}
function keyPressed() {
	if (keyWentDown ( UP_ARROW)) {
	   
	   Matter.Body.applyForce(b1.body,b1.body.position,{x:78,y:-77});
	   
	 }
   }



