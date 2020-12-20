class LoseScene extends MapScene{
	constructor() {
		super();

		this.background.push(new GameObject(youLost, width/2 - 100, height/2 - 70));
	}

	setup(){

	}

	draw(){
		background('red');

		for (let i = 0; i < this.background.length; i ++) {
  			this.background[i].draw();
	}


		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Hit Enter to go back to Hole", width/2 - 420 , height/ 2 - 60, width/ 2 + 20, height/2 + 10);
		text("Hit Spacebar to go to main menu", width / 2 - 420 , height/ 2, width/2 + 20, height/2 +10);


		if ( currentScene == tavernScene || hospitalScene || marketScene) {
			if (keyIsDown(ENTER)) {
       			currentScene = holeScene;
       			currentScene.setup();
       		}
			if (keyIsDown(32)) {
       			currentScene = main;
       		}
		}


		if ( currentScene == enScene || schoolScene || turkeyHouseScene) {
			if (keyIsDown(ENTER)) {
       			currentScene = magicScene;
       		}
			if (keyIsDown(32)) {
       			currentScene = main;
       		}
		}


		


}


}