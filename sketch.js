
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	var options= {
		isStatic:false,
		restitution:3,
		friction:0.5,
		densiny:1.2
		
		}

	//Create the Bodies Here.
    paper = new Paper (30,645,20,20);
  
	boxCenterSprite= createSprite(965,667,150,20);
	boxCenterSprite.shapeColor="red";	
	
	boxRightSprite= createSprite(1060,610,30,100);
	boxRightSprite.shapeColor="red";	
	
	boxLeftSprite= createSprite(870,615,30,100);
	boxLeftSprite.shapeColor="red";	
	
		 ground = new Ground(600,685,1200,20);
		 boxCenter = new Ground(965,667,150,20);
		 boxRight = new Ground(1060,610,30,100);
		 boxLeft = new Ground(870,615,30,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX+","+mouseY,mouseX,mouseY);

  paper.display();
  drawSprites();
  ground.display();
}


function keyPressed(){
	if(KeyCode=== UP_ARROW){

	   Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85})
		
	 }	
	}