class Gyoza extends GameObject{
	constructor(x, y, speed) {
		super(gyozaImage, x, y);
		this.speed = speed;
	}

	update() {
		this.x -= this.speed;

	}
}