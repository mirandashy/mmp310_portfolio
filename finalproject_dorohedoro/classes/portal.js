class Portal {
	constructor(img, x, y, sceneToOpen) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.sceneToOpen = sceneToOpen;
	}

	draw() {
		image(this.img, this.x, this.y);
	}

	collide(other) {
		if (this.x - this.width / 3 < other.x + other.width / 3 &&
			this.x + this.width / 3 > other.x - other.width / 3 &&
			this.y - this.height / 3 < other.y + other.height / 3 &&
			this.y + this.height / 3 > other.y - other.width / 3){
			return true;
		} else {
		return false;
		}

	}

}