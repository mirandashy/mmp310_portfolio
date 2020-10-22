class MapScene {
	constructor() {
		this.mush = [];
		this.mushMove = [];
		this.background = [];
		this.door = [];
	}

	draw() {
		background(0);

		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}


	for (let i = 0; i < this.mush.length; i++ ){
		this.mush[i].draw();
	}

	for (let i = 0; i < this.mushMove.length; i++ ){
		this.mushMove[i].draw();
		this.mushMove[i].update();
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
		image(shinRotationLeft, player.x, player.y);
	} else if (player.isRotatingUp) {
		image(shinUp, player.x, player.y);
	} else if (player.isRotatingDown) {
		image(shinDown, player.x, player.y);
	} else {
		image(shinMask, player.x, player.y);
	}


		/* draw door */

	let enterDoor;
	for (let i = 0; i < this.door.length; i ++) {
		this.door[i].draw();

		// detect collision between portal and player
		if (this.door[i].collide(player)) {
			this.door[i].drawEntrance();


			// user input
			if (keyIsDown(72)) {
				enterDoor = this.door[i].sceneToOpen;
			}
		}

	}

	if (enterDoor) {
		changeScene(enterDoor);
	}
	
	
	player.draw();

	}

}