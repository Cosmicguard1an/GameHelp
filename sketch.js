const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bank1,bank1img
var play
var wall1,wall2,wall3,wall4
var wall5, wall6, wall7, wall8, wall9, wall10
var wall11,wall12,wall13,wall14,wall15,wall16

var gold1,goldImg

var robber,robberImg



var gameState = 1

function preload() {
	bank1img = loadImage("images/bank.PNG");
	robberImg = loadImage("images/roBber.png");
}

function setup() {
	createCanvas(1000, 1000);

	//bank1 = createSprite(500,300,10,10)
	//bank1.addImage(bank1img);

	//play = createSprite(100,100,15,15);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Wall(100,550,15,800);
	wall2 = new Wall(585,943,635,15);
	wall3 = new Wall(900,550,15,800);
	wall4 = new Wall(501,143,815,15);
	wall5 = new Wall(593,724,600,15);
	wall6 = new Wall(746,620,15,190);
	wall7 = new Wall(182,275,150,15);
	wall8 = new Wall(817,275,150,15);
	wall9 = new Wall(370,250,15,200);
	wall10 = new Wall(180,395,150,15);
	wall11 = new Wall(368,540,15,150);
	wall12 = new Wall(580,622,15,190);
	wall13 = createSprite(187,943,160,15);
	wall14 = new Wall(275,886,15,100);
	wall15 = new Wall(561,302,165,15);
	wall16 = new Wall(561,302,15,165);

	Engine.run(engine);
  
}


function draw() { 
  background(45,190,213);
  rectMode(CENTER);



  //reference for making sprites
  fill("white");
  
  console.log(mouseX + "," + mouseY, mouseX,mouseY);
  
 
  if(gameState === 1) {
	background(45, 190, 213)
	wall1.display();
	wall2.display();
	wall3.display();
	wall4.display();
	wall5.display();
	wall6.display();
	wall7.display();
	wall8.display();
	wall9.display();
	wall10.display();
	wall11.display();
	wall12.display();
	wall14.display();
	wall15.display();
	wall16.display();

	wall13.shapeColor = ("blue")
  }
  
  drawSprites();
	
}






