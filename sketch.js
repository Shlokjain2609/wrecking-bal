const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var slingshot;
var ground;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,650,50);
	slingshot = new Sling(ball.body, {x :200,y : 100});
	ground = new Ground(700,570,400,10);
	box = new Box(580,550,50,50);
	box2 = new Box(610,550,50,50);
	box3 = new Box(640,550,50,50);
	box4 = new Box(670,550,50,50);
	box5 = new Box(700,550,50,50);
	box6 = new Box(580,520,50,50);
	box7 = new Box(610,520,50,50);
	box8 = new Box(640,520,50,50);
	box9 = new Box(670,520,50,50);
	box10 = new Box(700,520,50,50);
	box11 = new Box(580,490,50,50);
	box12 = new Box(610,490,50,50);
	box13 = new Box(640,490,50,50);
	box14 = new Box(670,490,50,50);
	box15 = new Box(700,490,50,50);
	box16 = new Box(580,460,50,50);
	box17 = new Box(610,460,50,50);
	box18 = new Box(640,460,50,50);
	box19 = new Box(670,460,50,50);
	box20 = new Box(700,460,50,50);
	box21 = new Box(580,430,50,50);
	box22 = new Box(610,430,50,50);
	box23 = new Box(640,430,50,50);
	box24 = new Box(670,430,50,50);
	box25 = new Box(700,430,50,50);
	box26 = new Box(580,400,50,50);
	box27 = new Box(610,400,50,50);
	box28 = new Box(640,400,50,50);
	box29 = new Box(670,400,50,50);
	box30 = new Box(700,400,50,50);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("blue");
  
  slingshot.display();
  ball.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});

}


