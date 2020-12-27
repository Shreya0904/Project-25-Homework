
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
dustbingreen=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	var options= {
		isStatic:false,
		restitution:3,
		friction:0.5,
		densiny:1.2
		
		}

	//Create the Bodies Here.
	paper = new Paper (65,630,50,50);
	
	dustbin=createSprite(965,580,150,20);
	dustbin.addImage(dustbingreen);
	dustbin.scale=0.75;
	
		 ground = new Ground(600,685,1200,20);
		 boxCenter = new Ground(965,667,150,20);
		 boxRight = new Ground(1060,610,30,100);
		 boxLeft = new Ground(870,615,30,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("pink");
  
  text(mouseX+","+mouseY,mouseX,mouseY);


  paper.display();
  ground.display();
  boxCenter.display();
  boxRight.display();
  boxLeft.display();

  drawSprites(); 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.position,{x:135,y:-135})
		
	 }	
	}