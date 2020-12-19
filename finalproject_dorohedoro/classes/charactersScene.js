class CharactersScene {
	constructor() {
		this.characters = [];
		this.names = [];


		this.characters.push(new ChooseCharacter(shinMask, width/ 3 - 250 , height / 2 - 90 , shinMask, holeScene));
		this.names.push(new GameObject(shinName, width/ 3 - 220, height / 2 - 150));

		this.characters.push(new ChooseCharacter(noiMask, width/ 3 - 50, height / 2 - 90 , noiMask, holeScene));
		this.names.push(new GameObject(noiName, width/ 3 - 20, height / 2 - 150));
	

		this.characters.push(new ChooseCharacter(nikaidoMask, width/ 3 * 2 + 100 , height / 2 - 100 , nikaidoMask, magicScene));
		this.names.push(new GameObject(nikaidoName, width/ 3 * 2  + 120, height / 2 - 150));

		this.characters.push(new ChooseCharacter(kaimanMask, width/ 3 * 2 - 100, height / 2 - 100, kaimanMask, magicScene));
		this.names.push(new GameObject(kaimanName, width/ 3 * 2 - 80 , height / 2 - 150));
	
	}

	setup() {

	}

	draw() {
		background(20, 20, 20);

		for (let i = 0; i < this.characters.length; i ++) {
			this.characters[i].draw();
		}


		  for (let i = 0; i < this.names.length; i ++) {
    		this.names[i].draw();
 		}    
		
	}

	mousePressed() {
		for (let i = 0; i < this.characters.length; i ++) {
			this.characters[i].mousePressed();
		}

	}
}