class CharactersScene {
	constructor() {
		this.characters = [];


		this.characters.push(new ChooseCharacter(shinMask, width/ 3 - 250 , height/ 2, shinMask, holeScene));
		this.characters.push(new ChooseCharacter(noiMask, width/ 3, height/ 2, noiMask, holeScene));
	

		this.characters.push(new ChooseCharacter(nikaidoMask,width/ 3 * 2 + 250 , height/ 2, nikaidoMask, magicScene));
		this.characters.push(new ChooseCharacter(kaimanMask,width/ 3 * 2, height/ 2, kaimanMask, magicScene));
	
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