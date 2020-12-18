class MapScene {
	constructor() {
		this.background = [];
		this.door = [];
	}

	draw() {
		background(0);

		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}


		/* draw door */

	//let enterDoor;
	for (let i = 0; i < this.portal.length; i ++) {
		this.portal[i].draw();

		// detect collision between portal and player
		 if (this.portal[i].collide(player)) {
			this.portal[i].drawText();


			// user input
			//if (keyIsDown(72)) {
			//	enterDoor = this.door[i].sceneToOpen;
			//}
		}

	}

	//if (enterDoor) {
	//	changeScene(enterDoor, currentScene);
	//}
	
	
	player.draw();

	}

}