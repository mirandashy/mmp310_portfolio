class GameObject {
	constructor(img, x, y) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.width = img.width;
		this.height = img.height;
	}

	draw() {
		image(this.img, this.x, this.y);
	}
}