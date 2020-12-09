/* 
	project one_six
	object oriented version
	classes and objects

*/
var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var noiMask, kaimanMask, nikaidoMask;

var startGameTab;
var selectTab;
var arrowL, arrowR;
var portal; 

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
var character;




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
	market = loadImage("images/holemarket.png");
	tavern = loadImage("images/hungry_bug.png");
	


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

	//mushTwo.delay(50);
	//mushThree.delay(50);


 	player = new Player(width / 2, height / 2);

 		//this.background.push(new GameObject(hospital, 1200, height - 210));
		//this.background.push(new GameObject(market, 650, height - 210));
		//this.background.push(new GameObject(tavern, 200, height - 160));

		portal.push(new Portal(hospital, 1200, height- 210, "hospital intern"));
		portal.push(new Portal(market, 1200, height- 210, "market intern"));
		portal.push(new Portal(taver, 1200, height- 210, "tavern intern"));
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

//function mousePressed() {
	//if ( character = shinMask ){
		//ellipse(width/2, height/2, 10, 10)
		//image(selectTab, width/2, height/2 );
	//} else {

	//}

//}

function draw() {
	characters.draw();


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


	player.draw();
	//scenes[currentScene].draw();
	//display.draw();

}

