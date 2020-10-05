/* 
	project one
*/


var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var shinX, shinY;
var shinMainX, shinMainY;
var shinSpeed = 2; 

var mushCounter = 5;
var mushOne, mushTwo, mushThree;

var shinDoor, devilHouse, rain, textBox;
var gyozaImage; 

var mushX = 80;   
var mushY = 100;

// game physics;

var groundY = 100;
var GRAVITY = 2; // acceleration 2px per frame
var shinYSpeed = 5;
var shinIsJumping = false;

var gyozaPositions = []; //add gyoza x values


var scene = "main"; // hole, characters


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
	createCanvas (1630, 400);
	shinX = width/2;
	shinY = height/2;
	imageMode(CENTER);
	
	rain.delay(((width / rain.width) * (height / rain.height)) * rain.gifProperties.frames[0].delay);

	mushTwo.delay(50);
	mushThree.delay(50);
}

function draw () {
	// scene manager
	if (scene == 'main') {
		main();
	} else if (scene == 'hole') {
		hole();
	} else if (scene == 'win') {
		win();
	} else if (scene == 'lose') {
		lose();
	}
}

 
 // scene functions

 function setupMain() {
 	shinX = shinMainX;
	shinY = shinMainY;
	scene = "main";

 }

function main() {
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

	shin();


	
	/*character movement*/
}

function setupHole(fromMain) {

	// saves shin map position
	if (fromMain) {
		shinMainX = shinX;
		shinMainY = shinY;
	}
	
	// move shin to game ground
	shinX = 250;
	shinY = height - groundY;
	scene = 'hole';	

	//add gyoza
	gyozaPositions = []; // reset gyoza position
	var gyozaNumber = random(8, 12);

	for (let i = 0; i < gyozaNumber; i++) {
		gyozaPositions.push( random(width/2, width) + i * width / 2);
	} 

	scene = 'hole';
}

function hole() {
	background(15, 15, 15);


		for (let x = 0; x <+ width; x += 160) {
					for (let y = 0; y <= height; y += 160) {

						image(rain, x, y);
					}
		}
	noStroke();
	fill("grey");
	rect(0, height - groundY, width, groundY);
	image(tavern, 200, height - 160);
	image(market, 650, height - 210);
	image(hospital, 1200, height - 210);
	image(light, 400, height - 200);
	image(light, 870, height - 200);
	image(light, 1550, height - 200);
	image(trash_bin, 500, height - 80);
	image(trash_bin, 1500, height - 100);



	//fill(0);
	//noStroke();
	//rect(5, 5, 300, 100);
	image(textBoxTwo, 190, 70);
	fill("white");
	textSize(20);
	textFont('Roboto Mono');
	var s = "Press spacebar to dodge the gyozas! One touch and the game is over!";
	text(s, 50, 35, 300, 200);
	



 	/* jumping and falling */
 	
 	// apply gravity
 	if (shinY < height - groundY) {
 		shinYSpeed += GRAVITY;
 	} else {
 		shinYSpeed = 0;
 		shinIsJumping = false;
 	}

 	//32 spacebar
 	if (!shinIsJumping && keyIsDown(32)) {
 		shinYSpeed = -30;
 		shinIsJumping = true;
 	}

 	shinY += shinYSpeed;

	image(shinMask, shinX, shinY);

 	for (let i = 0; i < gyozaPositions.length; i++){
 		let x = gyozaPositions[i];
 		gyoza(x);
 		gyozaPositions[i] -= 8;


 		if (i == gyozaPositions.length - 1 && shinX > x) {
 			scene = 'win';

 		}

 	}


}


function win() {

	fill(0);
	noStroke();
	rect(width/6, height/4, width/3 + width/3 - 50, height/4 + height/3);

	fill("white");
	textSize(100);
	textFont('Roboto Mono');
	var s = "You win!";
	text(s, width/3, height/2);

	textSize(50);
	var t = "Hit Enter to return to Map";
	text(t, width/3 - 150, height/2 + 100);

	if (keyIsDown(ENTER)) {
		setupMain();
	}
}


function lose() {
	fill(0);
	noStroke();
	rect(width/6, height/4, width/3 + width/3 - 50, height/4 + height/3);

	fill("white");
	textSize(100);
	textFont('Roboto Mono');
	var s = "You lost!";
	text(s, width/3, height/2);

	textSize(50);
	var t = "Hit R to return to try again";
	text(t, width/3 - 150, height/2 + 100);

	if (keyIsDown(82)) {
		setupHole(false);
	}
}

// game object functions

function door(img, x, y) {
	image(shinDoor, x, y);

	// 2d collision bewteen shin and door 

	if (shinX - shinMask.width / 3 < x + shinDoor.width / 3 && 
		shinX + shinMask.width / 3 > x - shinDoor.width / 3 &&
		shinY - shinMask.height / 3 < y + shinDoor.height / 3 &&
		shinY + shinMask.height / 3 > y - shinDoor.height / 3 
		) {	
			background(0);
				for (let x = 0; x <+ width; x += 160) {
					for (let y = 0; y <= height; y += 160) {
						image(rain, x, y);
					}
		} image(img, x, y);
	
		
		image(textBox, 180, 200);
	
		fill("white");
		textSize(18);
		textFont('Roboto Mono');
		var s = "You just entered Hole";
		text(s, 70, 195);
		textSize(15);
		var t = "Hit H to visit Hole";
		text(t, 100, 220);

		// H event
		if (keyIsDown(72)) {
			 setupHole(true);
		}

	} 

} 


function shin() {
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

function gyoza(x) {
	let y = height - groundY;
	image(gyozaImage, x, y);

	// collision
	if (shinX - shinMask.width / 3 < x + gyozaImage.width / 3 && 
		shinX + shinMask.width / 3 > x - gyozaImage.width / 3 &&
		shinY - shinMask.height / 3 < y + gyozaImage.height / 3 &&
		shinY + shinMask.height / 3 > y - gyozaImage.height / 3) {

		//change scene
		scene = 'lose';

	}
}
