class Player extends GameObject {
	constructor(x,y) {
		super(shinMask, x, y);

		this.right = shinRotation;
		this.left = shinRotationLeft;
		this.down = shinUp;
		this.up = shinDown;
		this.idle = shinMask;

		this.isRotating = false;
		this.isRotatingLeft = false;
		this.isRotatingUp = false;
		this.isRotatingDown = false;

		this.speed = 2;
		this.ySpeed = 5;

		this.lives = 3;
	}

	draw() {
		if (this.isRotating) {
			image(this.right, this.x, this.y);
		} else if (this.isRotatingLeft) {
			image(this.left, this.x, this.y);
		} else if (this.isRotatingUp) {
			image(this.down, this.x, this.y);
		} else if(this.isRotatingDown) {
			image(this.up, this.x, this.y);
		} else {
			image(this.idle, this.x, this.y); 
		} 

	}
}