
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	paperObject= new paper(100,100);
	Ground1 = new ground(600,695,1200,5);

  
}


function draw() {
	background(0);
	Engine.update(engine);
	var containerB = createSprite(930,680,100,20);
	var containerL= createSprite(880,640,20,100);
    var containerR= createSprite(980,640,20,100);

 
  

paperObject.display();
Ground1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})


	}

}

