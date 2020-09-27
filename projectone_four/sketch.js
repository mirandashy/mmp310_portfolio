/* 
	project one
*/


var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var shinX, shinY;
var shinSpeed = 2; 

var mushCounter = 5;
var mushOne, mushTwo, mushThree;

var shinDoor;

var mushX = 80;
var mushY = 100;

var mushZeroPosition = [
	[0, mushY],
	[0, mushY*2],
	[0, mushY*3],
	[0, mushY*4],
	[0, mushY*5],

	];


var mushTwoPosition = [
	[mushX*2, mushY],
	[mushX*2, mushY*2],
	[mushX*2, mushY*3],
	[mushX*2, mushY*4],
	[mushX*2, mushY*5],
];

var mushFourPosition = [
	[mushX*4, mushY],
	[mushX*4, mushY*2],
	[mushX*4, mushY*3],
	[mushX*4, mushY*4],
	[mushX*4, mushY*5],

];


var mushSixPosition = [
	[mushX*6, mushY],
	[mushX*6, mushY*2],
	[mushX*6, mushY*3],
	[mushX*6, mushY*4],
	[mushX*6, mushY*5],

	];

var mushEightPosition = [
	[mushX*8, mushY],
	[mushX*8, mushY*2],
	[mushX*8, mushY*3],
	[mushX*8, mushY*4],
	[mushX*8, mushY*5],

	];



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

}

function setup() {
	createCanvas (windowWidth, 360);
	shinX = width/2;
	shinY = height/2;
	imageMode(CENTER);
	
	mushTwo.delay(10);
	mushThree.delay(10);
}


function door(x, y) {
	image(shinDoor, x, y);

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
 		image(mushThree, 1840, mushCounter* 120);
 		image(mushTwo, 2000, mushCounter * 120);
 		image(mushThree, 2160, mushCounter* 120);
 		image(mushTwo, 2320, mushCounter * 120);
 		image(mushThree, 2480, mushCounter* 120);
 		image(mushTwo, 2640, mushCounter * 120);
 	}
	


	/*character movement*/

	/* door sign */
	door(2000, height/2);

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
