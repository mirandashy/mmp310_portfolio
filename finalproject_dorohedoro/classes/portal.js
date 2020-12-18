class Portal extends GameObject{
	constructor(message, img, x, y, sceneToOpen) {
		super();
		this.message = message;
		this.img = img;
		this.x = x;
		this.y = y;
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

	}


}