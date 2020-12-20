class PlatformScene {
	constructor(img, minObstacles, maxObstacles) {
		this.img = img;
		this.minObstacles = minObstacles;
		this.maxObstacles = maxObstacles;
		this.obstacles = [];
		this.background = [];
		//this.obstaclesPassed = 0;
		//this.obstaclesPassedOne = 10;
		//this.obstaclesPassedTwo = 20;
		//this.obstaclesPassedThree = 30;

		this.groundY = 200;
		this.gravity = 2;
		this.acceleration = 1;


	}

	setup() {
		player.x = 300;
		player.y = height/2;
		//this.obstaclesPassed = 0;

		//this.nextScene = nextScene; 
		this.obstacles = [];

		var n = random(this.minObstacles, this.maxObstacles);
		
		for (let i = 0; i < n; i++) {
			let x = random(width/2, width) + i * width / 2;
			this.obstacles.push(new Gyoza(x, height - this.groundY, 5));
			
				} 
		}

		

	draw() {
		background(20, 20, 20);
		
		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}


		fill("white");
		textSize(20);
		textFont('Roboto Mono');
		var s = "Press spacebar to dodge the obstacle! One touch and the game is over!";
		text(s, 50, 20, 300, 200);



		//apply gravity 
		if (player.y < height - this.groundY) {
 			player.ySpeed += this.gravity;
 		} else {
 			player.ySpeed = 0;
 			player.shinIsJumping = false;
 		}

	 	//32 spacebar for jumping
	 	if (!player.shinIsJumping && keyIsDown(32)) {
	 		player.ySpeed = -30;
	 		player.shinIsJumping = true;
	 	}

	 	player.y += player.ySpeed;
	 	player.draw();

	 	//score++;

	 	for (let i = 0; i < this.obstacles.length; i++) {
	 		this.obstacles[i].update();
	 		this.obstacles[i].draw();
	 		

	 		if (obstacles.collide(player)) {
	 				currentScene = loseScene;
	 				currentScene.setup();
	 			}

	 		if (i == this.obstacles.length - 1 && player.x > obstacle.x) {
	 			currentScene = winScene;
	 			currentScene.setup();
	 		}
	 	}


	 	

	 		// passes each obstacles
	 		//if (player.x > this.obstacle && i >= this.obstaclesPassed) {
	 			//score += 10;
	 			//this.obstaclesPassed++;
 				 //for (let j = this.obstaclesPassed; j < this.obstacles.length; j++) {
    				//this.obstacles[j].speed += this.acceleration;
  				//}
	 			
	 	//} 
}	
}