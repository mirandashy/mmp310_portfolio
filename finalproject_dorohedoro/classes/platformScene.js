class PlatformScene {
	constructor(minObstacles, maxObstacles) {
		this.minObstacles = minObstacles;
		this.maxObstacles = maxObstacles;
		this.obstacles = [];
		this.obstaclesPassed = 0;
		this.obstaclesPassedOne = 10;
		this.obstaclesPassedTwo = 20;
		this.obstaclesPassedThree = 30;

		this.groundY = 100;
		this.gravity = 2.5;
		this.acceleration = 1;


	}

	setup(nextScene) {
		player.x = 430;
		player.y = height - this.groundY;

		this.obstacles = []; 
		this.obstaclesPassed = 0;

		this.nextScene = nextScene; 

		var n = random(this.minObstacles, this.maxObstacles);

		for (let i = 0; i < n; i++) {
			let x = random(width/2, width) + i * width / 2;
			let obstacle = new Gyoza(x, height - this.groundY, 10);
			this.obstacles.push(obstacle);
		} 

		

	}

	draw() {
		background(0);
		noStroke();
		fill("grey");
		rect(0, height - this.groundY, width, this.groundY);
		image(hospital, 1200, height - 210);
		image(market, 650, height - 210);
		image(tavern, 200, height - 160);
		image(light, 400, height - 200);
		image(light, 870, height - 200);
		image(light, 1550, height - 200);
		image(trash_bin, 500, height - 80);
		image(trash_bin, 1500, height - 100);


		fill("white");
		textSize(20);
		textFont('Roboto Mono');
		var s = "Press spacebar to dodge the gyozas! One touch and the game is over!";
		text(s, 50, 0, 300, 200);



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
	 		let obstacle = this.obstacles[i];
	 		obstacle.update();
	 		obstacle.draw();

	 		if (obstacle.collide(player)) {
	 			player.lives -= 1;
	 			if (player.lives == 0) {
	 				score = 0;
	 				player.lives = 3;
	 				changeScene('lose', 'main');
	 			} else {
	 				changeScene('lose', currentScene);
	 			}


	 		}

	 		// passes each obstacles
	 		if (player.x > obstacle.x && i >= this.obstaclesPassed) {
	 			score += 10;
	 			this.obstaclesPassed++;
 				 for (let j = this.obstaclesPassed; j < this.obstacles.length; j++) {
    				this.obstacles[j].speed += this.acceleration;
  				}
	 			
	 		}

	 		if (i == this.obstacles.length - 1 && player.x > obstacle.x) {
	 			changeScene('win', this.nextScene);
	 		}
	 	}

		
	}
	
}