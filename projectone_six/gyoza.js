class Gyoza extends GameObject{
	constructor(x, y) {
		super(gyozaImage, x, y);
		this.speed = 10;
	}

	update() {
		this.x -= this.speed;

	}
}