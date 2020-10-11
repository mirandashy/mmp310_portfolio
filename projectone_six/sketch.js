/* 
	project one_six
	object oriented version
	classes and objects

*/
var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;

var mushOne, mushTwo, mushThree;

var shinDoor, devilHouse, rain, textBox;
var gyozaImage; 

var mush = [];
var mushMove = [];
var player;
var portal;


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
	imageMode(CENTER);

	mushTwo.delay(50);
	mushThree.delay(50);

	for (let x = 0; x <= width; x += 160) {
		for (let y = 0; y <= height; y += 100) {
			mushMove.push(new MushMove(mushOne, x, y + frameCount % 100));
		}

	}
	for (var mushCounter = 0; mushCounter < 5; mushCounter += 1) {
		mush.push(new GameObject(mushTwo, 80, mushCounter * 120));
		mush.push(new GameObject(mushThree, 240, mushCounter * 120));
		mush.push(new GameObject(mushTwo, 400, mushCounter * 120));
		mush.push(new GameObject(mushThree, 560, mushCounter * 120));
		mush.push(new GameObject(mushTwo, 720, mushCounter * 120));
		mush.push(new GameObject(mushThree, 880, mushCounter * 120));
		mush.push(new GameObject(mushTwo, 1040, mushCounter * 120));
		mush.push(new GameObject(mushThree, 1200, mushCounter * 120));
		mush.push(new GameObject(mushTwo, 1360, mushCounter * 120));
		mush.push(new GameObject(mushThree, 1520, mushCounter * 120));
		mush.push(new GameObject(mushTwo, 1680, mushCounter * 120));
 	}


 	player = new Player(width / 2, height / 2);
 	portal = new Portal( 500, width / 2);

}

function draw() {
	background(0);



	for (let i = 0; i < mush.length; i++ ){
		mush[i].draw();
	}

	for (let i = 0; i < mushMove.length; i++ ){
		mushMove[i].draw();
		mushMove[i].update();
	}


 	/* player keyboard events */

 		player.isRotating = false;
		player.isRotatingLeft = false;
		player.isRotatingUp = false;
		player.isRotatingDown= false;


	if (keyIsDown(RIGHT_ARROW)) {
		player.x += player.speed;
		player.isRotating = true;

	} else if (keyIsDown(LEFT_ARROW)) {
		player.x -= player.speed;
		player.isRotatingLeft = true;

	} else if (keyIsDown(UP_ARROW)) {
		player.y -= player.speed;
		player.isRotatingUp = true;

	} else if (keyIsDown(DOWN_ARROW)) {
		player.y += player.speed;
		player.isRotatingDown = true;
	}

	if (player.isRotating) {
		image(shinRotation, player.x, player.y); 
	} else if (player.isRotatingLeft) {
		image(player.isRotationLeft, player.x, player.y);
	} else if (player.isRotatingUp) {
		image(shinUp, player.x, player.y);
	} else if (player.isRotatingDown) {
		image(shinDown, player.x, player.y);
	} else {
		image(shinMask, player.x, player.y);
	}

	/* draw portal */

	player.draw();
	portal.draw();

}