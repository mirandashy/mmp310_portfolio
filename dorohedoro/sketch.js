/* 
	project one_six
	object oriented version
	classes and objects

*/
var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;

var mushOne, mushTwo, mushThree;

var shinDoor, devilHouse, rain, textBox;
var gyozaImage; 

var player;
var door;
var score = 0;
var display;
var scenes = {};
var currentScene = "main";


function preload() {
	shinMask = loadImage("images/shin_mask.gif");
	shinRotation = loadImage("images/shin_mask_rotation.gif");
	shinRotationLeft = loadImage("images/shin_mask_rotation_left.gif");
	shinDown = loadImage("images/shin_mask_up.gif");
	shinUp = loadImage("images/shin_mask_down.gif");
	mushOne = loadImage("images/mushroomone.gif");
	mushTwo = loadImage("images/mushroomtwo_reverse.gif");
	mushThree = loadImage("images/mushroomthree.gif");
	shinDoor = loadImage("images/shin_door.png");
	devilHouse = loadImage("images/devil_house.png");
	rain = loadImage("images/rain.gif");
	textBox = loadImage("images/box.png");
	textBoxTwo = loadImage("images/box_two.png");
	hospital = loadImage("images/hole_central_hospital.png");
	market = loadImage("images/holemarket.png");
	light = loadImage("images/lighting.png");
	tavern = loadImage("images/hungry_bug.png");
	gyozaImage = loadImage("images/gyoza.png");
	trash_bin = loadImage("images/trashbin.png");
	heartLives = loadImage("images/heart_lives.png");
}


function setup() {
	createCanvas(1630, 400);
	textFont('Roboto Mono');
	
	imageMode(CENTER);

	mushTwo.delay(50);
	mushThree.delay(50);


 	player = new Player(width / 2, height / 2);
 	door = new Door(devilHouse, 500, height / 2, "hole");

 	display = new Display();

 	scenes.main = new MagicWorld();
 	scenes.hole = new HoleScene();

 	scenes.hole = new PlatformScene(10,20);
 	scenes.win = new Prompt("You win!", "Hit Enter to return to the Magic World");
 	scenes.lose = new Prompt("You lose!", "Hit Enter to try again");



}

function changeScene(sceneName, nextScene) {
	currentScene = sceneName;
	scenes[currentScene].setup(nextScene);
}

function draw() {
	scenes[currentScene].draw();
	display.draw();

}