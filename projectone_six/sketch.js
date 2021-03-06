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
var scenes = {};
var currentScene = "main";


function preload() {
	shinMask = loadImage("shin_mask.gif");
	shinRotation = loadImage("shin_mask_rotation.gif");
	shinRotationLeft = loadImage("shin_mask_rotation_left.gif");
	shinDown = loadImage("shin_mask_up.gif");
	shinUp = loadImage("shin_mask_down.gif");
	mushOne = loadImage("mushroomone.gif");
	mushTwo = loadImage("mushroomtwo_reverse.gif");
	mushThree = loadImage("mushroomthree.gif");
	shinDoor = loadImage("shin_door.png");
	devilHouse = loadImage("devil_house.png");
	rain = loadImage("rain.gif");
	textBox = loadImage("box.png");
	textBoxTwo = loadImage("box_two.png");
	hospital = loadImage("hole_central_hospital.png");
	market = loadImage("holemarket.png");
	light = loadImage("lighting.png");
	tavern = loadImage("hungry_bug.png");
	gyozaImage = loadImage("gyoza.png");
	trash_bin = loadImage("trashbin.png");
}


function setup() {
	createCanvas(1630, 400);
	textFont('Roboto Mono');
	
	imageMode(CENTER);

	mushTwo.delay(50);
	mushThree.delay(50);


 	player = new Player(width / 2, height / 2);
 	door = new Door(devilHouse, 500, height / 2, "hole");

 	scenes.main = new MagicWorld();
 	scenes.hole = new HoleScene();

 	scenes.hole = new PlatformScene(8, 12);
 	scenes.win = new Prompt("You win", "Hit Enter to return to the Magic World");
 	scenes.lose = new Prompt("You lost!", "Hit Enter to return to try again");



}

function changeScene(sceneName, nextScene) {
	currentScene = sceneName;
	scenes[currentScene].setup(nextScene);
}

function draw() {
	scenes[currentScene].draw();

}