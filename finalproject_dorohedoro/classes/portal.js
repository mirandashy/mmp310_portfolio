class Portal extends GameObject{
	constructor(message, img, x, y, sceneToOpen) {
		super(img, x, y);
		this.message = message;
		this.sceneToOpen = sceneToOpen;
	}

	draw() {
		image(this.img, this.x, this.y);
	}




	drawText() {
		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		text(this.message, this.x - this.width, this.y - this.height/2, this.width, this.height);
		text("Hit Enter to enter the room", 50, 60, 100, 100);

	}


}