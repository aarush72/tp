var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball = new  Ball(400,300,100);
  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  fill("red");
  World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  ball.display();

}

function keyPressed() {

	if (keyPressed("UP_ARROW")) {

		Matter.Body.applyForce(ball,ball.position,{x : 300,y : -85});
		
	}
}
