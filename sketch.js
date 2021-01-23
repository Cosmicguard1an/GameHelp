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
var switch1,switch2,switch3,switch4,switch5,switch6

var diamondImg,diamond
var play,playImg

var gameState = 0
var sound1
var score = 0
var lives = 3

var coinS,diamondS

function preload() {
	bank1img = loadImage("images/bank.PNG");
	robberImg = loadImage("images/roBber.png");

	offimg = loadImage("images/off-switch.png");
	onimg = loadImage("images/on-switch.png");

	goldImg = loadImage("images/gold bars.png");
	diamondImg = loadImage("images/gemstone.png");

	cop1img = loadImage("images/cop.png");

	coinS = loadSound("Sounds/Coin sound effect.mp3");
	diamondS = loadSound("Sounds/DiamondSound.mp3");

	playImg = loadImage("images/play1.png");
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	if(gameState===0) {
		//USE A IMAGE FOR THE BUTTON, SO YOU CAN DO MOUSEPRESSED
		play = createSprite(50,800,10,10);
	}

	if(gameState===1) {
		switch1 = createSprite(516,294,10,10);
		switch2 = createSprite(602,294,10,10);
		switch3 = createSprite(602,377,10,10);
		switch4 = createSprite(516,377,10,10);
		switch5 = createSprite(704,684,10,10);
		switch6 = createSprite(612,684,10,10);

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
		wall18 = createSprite(724,368,15,50);


	
		robber = createSprite(195,205,10,10);
		robber.addImage(robberImg);
		robber.scale = 0.20

		cop1 = createSprite(600,872,10,10);
		cop2 = createSprite(392,785,10,10);
		cop3 = createSprite(138,640,10,10);
		cop4 = createSprite(720,192,10,10);
		cop5 = createSprite(426,193,10,10);

		
		cop1.velocityY = 1.5
		cop2.velocityY = 1.5
		cop3.velocityX = 2.5
		cop4.velocityY = 1.5
		cop5.velocityY = 4


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
	Engine.run(engine);
}


function draw() { 
	rectMode(CENTER);

	//reference for making sprites
	
	
	//title screen
	if(gameState === 0) {
		background(rgb(248,230,0))
		fill("black")
		textSize(30)
		text("Bank Robbery!",300,100);
		textSize(15);
		text("This is a game where you need to steal gold and diamonds, while avoiding lasers and guards", 50,150);
		text("There is 4 gold ingots, and a diamond. There is lasers and guards protecting it.",50,200)
		text("Your objective is to steal ALL the gold ingots and diamond, then escape, without dying ",50,250);
		text("You will be given 3 lives (or 3 chances) to win the game. If you lose, you can restart all over again",50,300)
		text("You will lose a life if you touch a guard or laser. You can disable the lasers by touching to a switch",50,350);
		text("You will see a number near a laser, and a number near a switch.",50,400);
		text("The laser and switch with the same number are linked. The switches will deactivate the corresponding laser",50,450);
		text("There is 5 lasers, and 5 switches, each going from 1-5. There is a switch with the number 6",50,500);
		text("The switch with number 6 is linked to the exit. The exit is a yellow door on the bottom of your screen",50,550);
		text("Each gold ingot will give you $1,000. The diamond will give you $6,000. You need to collect all of these, and then go out of the exit to win. ",50,600)
		text("As for the guards, you will need to maneuver carefully around them.",50,650);
		text("You are the robber. To move, use the arrow keys.",50,700);
		text("Good Luck! Press the 'Play' button to start. ",50,750);	
		
		play.addImage(playImg);
		play.scale = 0.125

		if(mousePressedOver(play)) {
			gameState = 1;
		}
		
	}	



	//ending screen (victory)
	if(gameState===2) {
		
	}

	//ending screen (loss)
	if(gameState===3) {

	}

	
	if(gameState === 1) {
		background(45, 190, 213)

		//robber display and making the robber move
		

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
		robber.bounceOff(wall18);


		cop1.bounceOff(wall2)
		cop1.bounceOff(wall5)
		cop2.bounceOff(wall2);

		cop2.bounceOff(wall5);

		cop3.bounceOff(wall1)
		cop3.bounceOff(wall11	)

		cop4.bounceOff(wall4)
		cop4.bounceOff(wall18)

		cop5.bounceOff(wall4);
		cop5.bounceOff(wall17);


		cop1.addImage(cop1img);
		cop1.scale = 0.15
		cop2.addImage(cop1img);
		cop2.scale = 0.15
		cop3.addImage(cop1img);
		cop3.scale = 0.15
		cop4.addImage(cop1img);
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

		switch1.addImage(onimg);
		switch1.scale = 0.05

		switch2.addImage(onimg);
		switch2.scale = 0.05

		switch3.addImage(onimg);
		switch3.scale = 0.05

		switch4.addImage(onimg);
		switch4.scale = 0.05
			
		switch5.addImage(onimg);
		switch5.scale = 0.05
			
		switch6.addImage(onimg);
		switch6.scale = 0.05
			




		//sound1.play();
		fill("black")
		textSize(25);
		text("Money: " + "$" + score,470,467);
		text("Lives: " + lives,470,500)
		text("1",125,326);
		text("4",421,639);
		text("3",863,169);
		text("2",821,675);
		text("5",782,900);
		text("6",188,887);

		textSize(20);
		text("1",515,320);
		text("2",600,320);
		text("3",515,410);
		text("4",600,410);
		text("5",610,660);
		text("6",700,660);

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
		wall18.shapeColor = ("green")

		laser1.shapeColor = ("red")
		laser2.shapeColor = ("red")
		laser3.shapeColor = ("red")
		laser4.shapeColor = ("red")
		laser5.shapeColor = ("red")
				
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
			coinS.play();
		}

		if(robber.isTouching(gold2)) {
			gold2.x = 15000
			score = score + 1000
			coinS.play();
		}

		if(robber.isTouching(gold3)) {
			gold3.x = 15000
			score = score + 1000
			coinS.play();
		}
		if(robber.isTouching(gold4)) {
			gold4.x = 15000
			score = score + 1000
			coinS.play();
		}
			
		if(robber.isTouching(diamond)) {
			score = score + 6000
			diamond.x = 15000
			diamondS.play();
		}




		if(robber.isTouching(cop1) || robber.isTouching(cop3) || robber.isTouching(cop4) || robber.isTouching(cop5)) {
			reset();
		}

		if(robber.isTouching(laser1) || robber.isTouching(laser2) || robber.isTouching(laser3) || robber.isTouching(laser4)|| robber.isTouching(laser5)) {
			reset();
		}

		if(robber.isTouching(switch1)) {
			switch1.addImage(offimg);
			laser1.x = 150000;
		}

		if(robber.isTouching(switch2)) {
			switch2.addImage(offimg);
			laser3.x = 150000;
		}

		if(robber.isTouching(switch3)) {
			switch3.addImage(offimg);
			laser2.x = 150000;
		}

		if(robber.isTouching(switch4)) {
			switch4.addImage(offimg);
			laser4.x = 150000;
		}

		if(robber.isTouching(switch5)) {
			switch5.addImage(offimg);
			wall13.velocityX = -4;
		}

		if(robber.isTouching(switch6)) {
			switch6.addImage(offimg);
			laser5.x = 15000
		}

		//if u die u will go to a losing/restart screen
		if(lives === 0) {
			gameState = 3
		}

		
		if(score === 10000 && robber.x === 160 && robber.y === 970) {
			gameState = 2
		}

		
			


	}


	drawSprites();
	
}

function reset(){
	robber.x = 195
	robber.y = 205
	lives = lives - 1;
	score = 0

	switch1.addImage(onimg);
	switch2.addImage(onimg);
	switch3.addImage(onimg);
	switch4.addImage(onimg);
	switch5.addImage(onimg);
	switch6.addImage(onimg);

	laser1.x = 240
	laser1.y = 335

	laser2.x = 389
	laser2.y = 663

	laser3.x = 823
	laser3.y = 528

	laser4.x = 747
	laser4.y = 209

	laser5.x = 665
	laser5.y = 833

	gold1.x = 183
	gold1.y = 335
		
	gold2.x = 811
	gold2.y = 205
	
	gold3.x = 487
	gold3.y = 657
	
	gold4.x = 820
	gold4.y = 615

	diamond.x = 782
	diamond.y = 825

}


