class Prompt {
	constructor(title, instruction) {
		this.title = title;
		this.instruction = instruction;
		this.enterStarted = false;

	}

	setup(sceneName) {
		this.sceneToOpen = sceneName;
	}

	draw() {
		fill(0);
		noStroke();
		rect(width/6, height/4, width/2.5 + width/3 - 50, height/4 + height/3);

		fill("white");
		textSize(100);
		textFont('Roboto Mono');
		text(this.title, width/3, height/2);

		textSize(50);
		text(this.instruction, width/3 - 80, height/2 + 100);


		//event 
		if (keyIsDown(ENTER) && !this.enterStarted ) {
			this.enterStarted = true;
		}

		if (this.enterStarted && !keyIsPressed) {
			changeScene(this.sceneToOpen);
			this.enterStarted = false;
		}
	}
}