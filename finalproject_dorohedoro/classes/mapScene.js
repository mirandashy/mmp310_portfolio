class MapScene {
	constructor() {
		this.background = [];
		this.door = [];
	}

	draw() {
		background(0);

		/* draw door */

		for (let i = 0; i < this.background.length; i ++) {
  			let bg = this.background[i]; // easier to use
  			bg.draw();

 		 // its a portal if it has drawText
  			if (bg.drawText) {
    			if (bg.collide(player)) {
      			bg.drawText();

      // user input
      if (keyIsDown(ENTER)) {
        currentScene = bg.sceneToOpen;
      }
    }
  }
}
	
	player.draw();

	}

}