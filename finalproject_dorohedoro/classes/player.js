class Player extends GameObject {
	constructor(x,y) {
		super(shinMask, x, y);

		//this.right = shinRotation;
		//this.left = shinRotationLeft;
		//this.down = shinUp;
		//this.up = shinDown;
		this.idle = shinMask;

		this.isWalking = false;
		//this.isRotatingUp = false;
		//this.isRotatingDown = false;

		this.speed = 2;
		this.ySpeed = 5;

		this.lives = 3;
	}

	draw() {
		if (this.isWalking) {
			image(this.idle, this.x, this.y);
		} else  {
			image(this.idle, this.x, this.y); 
		} 

	}
}