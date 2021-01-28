const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof1 = new Roof(540, 100, 300, 20);
	bob1 = new Bob(440, 350, 50);
	bob2 = new Bob(490, 350, 50);
	bob3 = new Bob(540, 350, 50);
	bob4 = new Bob(590, 350, 50);
	bob5 = new Bob(640, 350, 50);
	rope1 = new Rope(bob1.body, roof1.body, -50*2, 0);
}

function draw() {
	rectMode(CENTER);
	background(0);

	roof1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	drawSprites();
}