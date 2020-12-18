class CharactersScene {
	constructor() {
		this.characters = [];


		this.characters.push(new ChooseCharacter(shinMask, width/ 3 - 200 , height / 2 , shinMask, holeScene));
		this.characters.push(new ChooseCharacter(noiMask, width/ 3 + 30, height / 2 , noiMask, holeScene));
	

		this.characters.push(new ChooseCharacter(nikaidoMask, width/ 3 * 2 + 150 , height / 2 - 20 , nikaidoMask, magicScene));
		this.characters.push(new ChooseCharacter(kaimanMask, width/ 3 * 2 - 30, height / 2 - 20, kaimanMask, magicScene));
	
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