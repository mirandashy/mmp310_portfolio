/* 
	project one
*/


var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var shinX, shinY;
var shinSpeed = 2; 

var mushCounter = 5;
var mushOne, mushTwo, mushThree;

var shinDoor, devilHouse;

var mushX = 80;
var mushY = 100;


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

}

function setup() {
	createCanvas (1630, 360);
	shinX = width/2;
	shinY = height/2;
	imageMode(CENTER);
	
	mushTwo.delay(50);
	mushThree.delay(50);
}


function door(img, x, y) {
	image(shinDoor, x, y);

	// 2d collision bewteen shin and door 

	if (shinX - shinMask.width / 2 < x + shinDoor.width / 2 && 
		shinX + shinMask.width / 2 > x - shinDoor.width / 2 &&
		shinY - shinMask.height / 2 < y + shinDoor.height / 2 &&
		shinY + shinMask.height / 2 < y - shinDoor.height / 2 
		) {	
			background(0);
			image(img, x, y);
	} 

	}

 
function draw() {
	background(0);

	// setting
	for (let x = 0; x <= width; x += mushX * 2) {
		for (let y = 0; y <= height; y += mushY) {
			image(mushOne, x, y + frameCount % mushY);
		}

	}
 	
 	for (var mushCounter = 0; mushCounter < 5; mushCounter += 1) {
 		image(mushTwo, 80, mushCounter * 120);
 		image(mushThree, 240, mushCounter* 120);
 		image(mushTwo, 400, mushCounter * 120);
 		image(mushThree, 560, mushCounter* 120);
 		image(mushTwo, 720, mushCounter * 120);
 		image(mushThree, 880, mushCounter* 120);
 		image(mushTwo, 1040, mushCounter * 120);
 		image(mushThree, 1200, mushCounter* 120);
 		image(mushTwo, 1360, mushCounter * 120);
 		image(mushThree, 1520, mushCounter* 120);
 		image(mushTwo, 1680, mushCounter * 120);
 
 	}
	

	/* door sign */
	door(devilHouse, 500, height/2);


	
	/*character movement*/

	var shinIsRotating = false;
	var shinIsRotatingLeft = false;
	var shinIsRotatingUp = false;
	var shinIsRotatingDown= false;

	if (keyIsDown(RIGHT_ARROW)) {
		shinX += shinSpeed;
		shinIsRotating = true;

	} else if (keyIsDown(LEFT_ARROW)) {
		shinX -= shinSpeed;
		shinIsRotatingLeft = true;

	} else if (keyIsDown(UP_ARROW)) {
		shinY -= shinSpeed;
		shinIsRotatingUp = true;

	} else if (keyIsDown(DOWN_ARROW)) {
		shinY += shinSpeed;
		shinIsRotatingDown = true;
	}

	if (shinIsRotating) {
		image(shinRotation, shinX, shinY); 
	} else if (shinIsRotatingLeft) {
		image(shinRotationLeft, shinX, shinY);
	} else if (shinIsRotatingUp) {
		image(shinUp, shinX, shinY);
	} else if (shinIsRotatingDown) {
		image(shinDown, shinX, shinY);
	} else {
		image(shinMask, shinX, shinY);
	}

	


}
