class CharactersScene {
	constructor() {
		this.characters = [];


		this.characters.push(new ChooseCharacter(shinMask, width/ 3 - 250 , height / 2 - 90 , shinMask, holeScene));
		this.characters.push(new ChooseCharacter(noiMask, width/ 3 - 50, height / 2 - 90 , noiMask, holeScene));
	

		this.characters.push(new ChooseCharacter(nikaidoMask, width/ 3 * 2 + 100 , height / 2 - 100 , nikaidoMask, magicScene));
		this.characters.push(new ChooseCharacter(kaimanMask, width/ 3 * 2 - 100, height / 2 - 100, kaimanMask, magicScene));
	
	}

	setup() {

	}

	draw() {
		background('red');

		for (let i = 0; i < this.characters.length; i ++) {
			this.characters[i].draw();
		}
		
	}

	mousePressed() {
		for (let i = 0; i < this.characters.length; i ++) {
			this.characters[i].mousePressed();
		}

	}
}