class Door extends GameObject {
	constructor(img, x, y, sceneToOpen) {
		super(shinDoor, x, y);
		this.img = shinDoor;
		this.sceneToOpen = sceneToOpen; 
	}

	draw() {
		image(this.img, this.x, this.y);
	}

	drawEntrance() {
		background(0);
				for (let x = 0; x <+ width; x += 160) {
					for (let y = 0; y <= height; y += 160) {
						image(rain, x, y);
					}
				}
		image(devilHouse, 500, height/2);
		image(textBox, 180, 200);
	
		fill("white");
		textSize(18);
		var s = "You just entered Hole";
		text(s, 70, 195);
		textSize(15);
		var t = "Hit H to visit Hole";
		text(t, 100, 220);
	}
	
}