/* 
	project one_six
	object oriented version
	classes and objects

*/ 
/*characters var */
var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var noiMask, kaimanMask, nikaidoMask;

//var shinChoice, noiChoice, nikaidoChoice, kaimanChoice;
//var choice = 'none';

var startGameTab;
var selectTab;

/*arrow var */
//var arrowL, arrowR;

//var arrowRXOne = width/3 + 150;
//var arrowLXOne = width/ 3  - 150;

//var arrowRXTwo = width/3 * 2 + 150;
//var arrowLXTwo = width/ 3 * 2 - 150;

//var arrowY = height/ 2;


var portal = [];

var mushOne, mushTwo, mushThree;

var shinDoor, devilHouse, rain, textBox;
var gyozaImage; 

var player;
var main;
//var door;
//var score = 0;
//var display;
//var scenes = {};
var currentScene = "main";
var character = [];
var scene;




function preload() {
	shinMask = loadImage("images/shin_mask.gif");
	noiMask = loadImage("images/noi_mask.gif");
	kaimanMask = loadImage("images/kaiman_face.gif");
	nikaidoMask = loadImage("images/nikaido_mask.gif");

	startGameTab = loadImage("images/start_game_tab.gif");
	selectTab = loadImage("images/select_tab.gif");
	arrowL = loadImage("images/arrow_left.png");
	arrowR = loadImage("images/arrow_right.png");

	hospital = loadImage("images/hole_central_hospital.png");
	hospitalInside = loadImage("images/hospital_intern.png");

	market = loadImage("images/holemarket.png");

	tavern = loadImage("images/hungry_bug.png");
	tavernInside = loadImage("images/tavern_inside.png");


	


	//shinRotation = loadImage("images/shin_mask_rotation.gif");
	//shinRotationLeft = loadImage("images/shin_mask_rotation_left.gif");
	//shinDown = loadImage("images/shin_mask_up.gif");
	//shinUp = loadImage("images/shin_mask_down.gif");
	mushOne = loadImage("images/mushroomone.gif");
	mushTwo = loadImage("images/mushroomtwo_reverse.gif");
	mushThree = loadImage("images/mushroomthree.gif");
	//shinDoor = loadImage("images/shin_door.png");
	//devilHouse = loadImage("images/devil_house.png");
	rain = loadImage("images/rain.gif");
	textBox = loadImage("images/box.png");
	textBoxTwo = loadImage("images/box_two.png");
	


	light = loadImage("images/lighting.png");
	
	gyozaImage = loadImage("images/gyoza.png");
	trash_bin = loadImage("images/trashbin.png");
	heartLives = loadImage("images/heart_lives.png");
}


function setup() {
	createCanvas(1630, 400);
	textFont('Roboto Mono');
	
	imageMode(CENTER);

	main = new EntryScene(); 
	characters = new CharactersScene();
	holeScene = new HoleScene();
	tavernScene = new TavernScene();
	hospitalScene = new HospitalScene();

	//mushTwo.delay(50);
	//mushThree.delay(50);


 	player = new Player(width / 2, height / 2);

 		

		
		//this.background.push(new GameObject(light, 400, height - 200));
		//this.background.push(new GameObject(light, 870, height - 200));
		//this.background.push(new GameObject(light, 1550, height - 200));
		//this.background.push(new GameObject(trash_bin, 500, height - 80));
		//this.background.push(new GameObject(trash_bin, 1500, height - 100));
 	//door = new Door(devilHouse, 500, height / 2, "hole");

 	//display = new Display();

 	//scenes.main = new MagicWorld();
 	//scenes.hole = new HoleScene();

 	//scenes.hole = new PlatformScene(10,20);
 	//scenes.win = new Prompt("You win!", "Hit Enter to return to the Magic World");
 	//scenes.lose = new Prompt("You lose!", "Hit Enter to try again");



}

//function changeScene(sceneName, nextScene) {
	//currentScene = sceneName;
	//scenes[currentScene].setup(nextScene);
//}

function mousePressed() {
	if ( character = shinMask ){ 
		fill(255);
  		rect(25, 25, 200, 200);
		//image(selectTab, width/2, height/2 );
	} else {
		fill(0);
  		rect(25, 25, 200, 200);

	}

}

function draw() {
	hospitalScene.draw();

	//var shinChoice = false;
	//var noiChoice = false;
	//var nikaidoChoice = false;
	//var kaimanChoice = false;

	//if (mouseIsPressed) {
	//	return true;
	//} else {
	//	return false;
	//} 


	//if (choice == 'shinChoice') {
	//	scene = 'holeScene';
	//} else if (choice == 'noiChoice') {
	//	scene = 'holeScene';
	//} else if (choice == 'nikaidoChoice') {
	//	scene = 'mgicWorld';
	//} else if (choice == 'kaimanChoice') {
	//	scene = 'magicWorld';
	//} else {
	//	choice = 'none';
	//}


	// player keyboard //

	player.isWalking = false

	if (keyIsDown(RIGHT_ARROW)) {
		player.x += player.speed;
		player.isWalking = true;

	} else if (keyIsDown(LEFT_ARROW)) {
		player.x -= player.speed;
		player.isWalking = true;

	} else if (keyIsDown(UP_ARROW)) {
		player.y -= player.speed;
		player.isWalking = true;

	} else if (keyIsDown(DOWN_ARROW)) {
		player.y += player.speed;
		player.isWalking = true;
	}

	/* draw portals */
	for (let i = 0; i < portal.length; i++) {
		portal[i].draw();
	}


	//player.draw();
	//scenes[currentScene].draw();
	//display.draw();

}

