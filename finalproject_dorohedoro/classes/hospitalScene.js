class HospitalScene extends PlatformScene {
	constructor(img,minObstacles, maxObstacles) {
		super(img,minObstacles, maxObstacles);

		this.background.push(new GameObject(hospitalInside, 0 , 0));
	}

	draw() {
		background(20, 20, 20);

		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}
	}

}