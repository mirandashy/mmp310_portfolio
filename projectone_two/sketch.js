/* 
	project one
*/


var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var shinX, shinY;
var shinSpeed = 2; 

var mushCounter = 5;
var mushOne, mushTwo, mushThree;

var MushX = 80;
var mushY = 100;

var mushZeroPosition = [
	[0, mushY],
	[0, mushY*2],
	[0, mushY*3],
	[0, mushY*4],
	[0, mushY*5],

	];


var mushTwoPosition = [
	[MushX*2, mushY],
	[MushX*2, mushY*2],
	[MushX*2, mushY*3],
	[MushX*2, mushY*4],
	[MushX*2, mushY*5],
];

var mushFourPosition = [
	[MushX*4, mushY],
	[MushX*4, mushY*2],
	[MushX*4, mushY*3],
	[MushX*4, mushY*4],
	[MushX*4, mushY*5],

];


var mushSixPosition = [
	[MushX*6, mushY],
	[MushX*6, mushY*2],
	[MushX*6, mushY*3],
	[MushX*6, mushY*4],
	[MushX*6, mushY*5],

	];

var mushEightPosition = [
	[MushX*8, mushY],
	[MushX*8, mushY*2],
	[MushX*8, mushY*3],
	[MushX*8, mushY*4],
	[MushX*8, mushY*5],

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

}

function setup() {
	createCanvas (640, 480);
	shinX = width/2;
	shinY = height/2;
	imageMode(CENTER);
}

function draw() {
	background(0);

	// setting

	for (let i = 0; i < mushTwoPosition.length; i++) {
		image(mushOne, mushTwoPosition[i][0], mushTwoPosition[i][1]);

		mushTwoPosition[i][1] +=2;
		if (mushTwoPosition[i][1] > height ) {
			mushTwoPosition[i][1] = 0;
		}
	}

	for (let i = 0; i < mushFourPosition.length; i++) {
		image(mushOne, mushFourPosition[i][0], mushFourPosition[i][1]);

		mushFourPosition[i][1] += 2;
		if (mushFourPosition[i][1] > height ) {
			mushFourPosition[i][1] = 0;
		}
	}


	for (let i = 0; i < mushSixPosition.length; i++) {
		image(mushOne, mushSixPosition[i][0], mushSixPosition[i][1]);

		mushSixPosition[i][1] +=2;
		if (mushSixPosition[i][1] > height ) {
			mushSixPosition[i][1] = 0;
		}
	}


	for (let i = 0; i < mushZeroPosition.length; i++) {
		image(mushOne, mushZeroPosition[i][0], mushZeroPosition[i][1]);

		mushZeroPosition[i][1] +=2;
		if (mushZeroPosition[i][1] > height ) {
			mushZeroPosition[i][1] = 0;
		}
	}

	for (let i = 0; i < mushEightPosition.length; i++) {
		image(mushOne, mushEightPosition[i][0], mushEightPosition[i][1]);

		mushEightPosition[i][1] +=2;
		if (mushEightPosition[i][1] > height ) {
			mushEightPosition[i][1] = 0;
		}
	}



	for (var mushCounter = 0; mushCounter <5; mushCounter +=1){
		image(mushTwo, 80, mushCounter * 120);
		image(mushThree, 240, mushCounter * 120);
		image(mushTwo, 400, mushCounter * 120);
		image(mushThree, 560, mushCounter * 120);
	}

	


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
