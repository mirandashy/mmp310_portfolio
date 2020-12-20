class MapScene {
	constructor() {
		this.background = [];
	}

	draw() {
		background(20, 20, 20);

		/* draw portal */

		let enterPortal;

		for (let i = 0; i < this.background.length; i ++) {
  			let bg = this.background[i]; // easier to use
  			bg.draw();

 		 // its a portal if it has drawText
  			if (bg.drawText) {
    			if (bg.collide(player)) {
      			bg.drawText();

      			// user input
      			if (keyIsDown(ENTER)) {
       				enterPortal = bg.sceneToOpen;
      			}
    		}
  	}

  	if (enterPortal) {
  	 changeScene(enterPortal);
      currentScene.setup();
	}

}
	
	player.draw();

	}

}