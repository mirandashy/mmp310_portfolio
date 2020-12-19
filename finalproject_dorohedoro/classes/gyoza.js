class Gyoza extends GameObject {
	constructor(x,y, speed){
		super(gyozaImage, x, y);
		this.speed = 4;
	}

	update() {
		this.x -= this.speed;
		

	}
}