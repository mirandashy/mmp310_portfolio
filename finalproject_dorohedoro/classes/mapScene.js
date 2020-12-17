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
	//for (let i = 0; i < this.door.length; i ++) {
		//this.door[i].draw();

		// detect collision between portal and player
		//if (this.door[i].collide(player)) {
			//this.door[i].drawEntrance();


			// user input
			//if (keyIsDown(72)) {
			//	enterDoor = this.door[i].sceneToOpen;
			//}
		//}

	//}

	//if (enterDoor) {
	//	changeScene(enterDoor, currentScene);
	//}
	
	
	player.draw();

	}

}