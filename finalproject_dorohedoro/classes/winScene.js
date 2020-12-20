class WinScene extends MapScene{
	constructor() {
		super();

		this.background.push(new GameObject(youWon, width/2 - 100, height/2 - 70));
	}

	setup(){

	}

	draw(){
		background(20,20,20);

		for (let i = 0; i < this.background.length; i ++) {
  			this.background[i].draw();
		}


		fill(255);
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Hit Enter to go proceed to the next level", width/2 - 420 , height/ 2 - 60, width/ 2 + 20, height/2 + 10);


		if ( currentScene == tavernScene|| hospitalScene || marketScene) {
			if (keyIsDown(ENTER)) {
       		}
		}


		if ( currentScene == enScene || schoolScene || turkeyHouseScene) {
			if (keyIsDown(ENTER)) {
			}
		}

	}
}