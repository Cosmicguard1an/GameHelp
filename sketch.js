const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bank1,bank1img
var play
var wall1,wall2,wall3,wall4
var wall5, wall6, wall7, wall8, wall9, wall10
var wall11,wall12,wall13,wall14,wall15,wall16,wall17

var gold1,gold2,gold3,gold4,goldImg

var cop1img, cop2img
var cop1,cop2,cop3,cop4,cop5
var laser1,laser2,laser3,laser4,laser5

var robber,robberImg

var offimg,onimg

var diamondImg,diamond

var gameState = 1

var score = 0

var sound1,sound2

function preload() {
	bank1img = loadImage("images/bank.PNG");
	robberImg = loadImage("images/roBber.png");

	offimg = loadImage("images/off-switch.png");
	onimg = loadImage("images/on-switch.png");

	goldImg = loadImage("images/gold bars.png");
	diamondImg = loadImage("images/gemstone.png");

	cop1img = loadImage("images/cop.png");
	cop2img = loadImage("images/police cop 2.png");

	sound1 = loadSound("sound.mp3");
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = createSprite(100,550,15,800);
	wall2 = createSprite(585,943,635,15);
	wall3 =	createSprite(900,550,15,800);
	wall4 = createSprite(501,143,815,15);
	wall5 = createSprite(593,724,600,15);
	wall6 = createSprite(746,620,15,190);
	wall7 = createSprite(182,275,150,15);
	wall8 = createSprite(817,275,150,15);
	wall9 = createSprite(370,250,15,200);
	wall10 = createSprite(180,395,150,15);
	wall11 = createSprite(368,540,15,150);
	wall12 = createSprite(580,622,15,190);
	wall13 = createSprite(187,943,160,15);
	wall14 = createSprite(275,886,15,100);
	wall15 = createSprite(561,340,165,15);
	wall16 = createSprite(561,340,15,165);
	wall17 = createSprite(474,606,195,15);

	Engine.run(engine);
	
	robber = createSprite(195,205,10,10);

	cop1 = createSprite(600,872,10,10);
	cop2 = createSprite(451,862,10,10);
	cop3 = createSprite(138,650,10,10);
	cop4 = createSprite(673,192,10,10);
	cop5 = createSprite(426,193,10,10);

	


	gold1 = createSprite(183,335,10,10);
	gold2 = createSprite(811,205,10,10);
	gold3 = createSprite(487,657,10,10);
	gold4 = createSprite(820,615,10,10);

	diamond = createSprite(782,825,10,10);

	laser1 = createSprite(240,335,5,105)
	laser2 = createSprite(389,663,5,105)
	laser3 = createSprite(823,528,140,5)
	laser4 = createSprite(747,209,5,118)
	laser5 = createSprite(665,833,5,205)
}


function draw() { 
 // background(45,190,213);
  rectMode(CENTER);

  

  //robber display and making the robber move
  robber.addImage(robberImg);
  robber.scale = 0.20
  robber.bounceOff(wall1);
  robber.bounceOff(wall2);
  robber.bounceOff(wall3);
  robber.bounceOff(wall4);
  robber.bounceOff(wall5);
  robber.bounceOff(wall6);
  robber.bounceOff(wall7);
  robber.bounceOff(wall8);
  robber.bounceOff(wall9);
  robber.bounceOff(wall10);
  robber.bounceOff(wall11);
  robber.bounceOff(wall12);
  robber.bounceOff(wall13);
  robber.bounceOff(wall14);
  robber.bounceOff(wall15);
  robber.bounceOff(wall16);
  robber.bounceOff(wall17);



  cop1.addImage(cop1img);
  cop1.scale = 0.15
  
  cop2.addImage(cop2img);
  cop2.scale = 0.15
  cop3.addImage(cop1img);
  cop3.scale = 0.15
  cop4.addImage(cop2img);
  cop4.scale = 0.15
  cop5.addImage(cop1img);
  cop5.scale = 0.15

  gold1.addImage(goldImg)
  gold1.scale = 0.175

  gold2.addImage(goldImg);
  gold2.scale = 0.175

  gold3.addImage(goldImg);
  gold3.scale = 0.175

  gold4.addImage(goldImg);
  gold4.scale = 0.175

  diamond.addImage(diamondImg);
  diamond.scale = 0.5


  //reference for making sprites
  fill("white");
  console.log(mouseX + "," + mouseY, mouseX,mouseY);
  
  

  if(gameState === 0) {
	  	
  }
 
  if(gameState === 1) {
	 background(45, 190, 213)


	 //sound1.play();
	fill("black")
  	textSize(25);
  	text("Money: " + "$" + score,470,467);
		wall1.shapeColor = ("green");
		wall2.shapeColor = ("green")
		wall3.shapeColor = ("green")
		wall4.shapeColor = ("green")
		wall5.shapeColor = ("green")
		wall6.shapeColor = ("green")
		wall7.shapeColor = ("green")
		wall8.shapeColor = ("green")
		wall9.shapeColor = ("green")
		wall10.shapeColor = ("green")
		wall11.shapeColor = ("green")
		wall12.shapeColor = ("green")
		wall13.shapeColor = ("green")
		wall14.shapeColor = ("green")
		wall15.shapeColor = ("green")
		wall17.shapeColor = ("green")
		wall16.shapeColor = ("green")

		

	 //Making robber bounceOff of walls
	 

	 wall13.shapeColor = ("yellow")

	 if(keyIsDown(UP_ARROW)) {
		 robber.y = robber.y -4
	 }

	 if(keyIsDown(DOWN_ARROW)) {
		 robber.y = robber.y + 4
	 }

	 if(keyIsDown(LEFT_ARROW)) {
		 robber.x = robber.x - 4
	 }

	 if(keyIsDown(RIGHT_ARROW)) {
		 robber.x = robber.x + 4;
	 }

	 if(robber.isTouching(gold1)) {
		 gold1.x = 15000
		 score = score + 1000
	 }
	 if(robber.isTouching(gold2)) {
		gold2.x = 15000
		score = score + 1000
	}
	if(robber.isTouching(gold3)) {
		gold3.x = 15000
		score = score + 1000
	}
	if(robber.isTouching(gold4)) {
		gold4.x = 15000
		score = score + 1000
	}

	
		
		//sound1.play();
	

	 if(robber.isTouching(diamond)) {
		 score = score + 6000
		 diamond.x = 15000
	 }

	 

	 
	 
  }
  
  drawSprites();
	
}






