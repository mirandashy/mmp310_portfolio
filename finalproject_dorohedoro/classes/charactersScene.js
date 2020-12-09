class CharactersScene {
	constructor() {
		this.characters = [];


		this.characters.push(new GameObject(shinMask, width/ 3, height/ 2));
		this.characters.push(new GameObject(noiMask, width/ 3, height/ 2));
		this.characters.push(new GameObject(arrowL,width/ 3  - 150, height/ 2));
		this.characters.push(new GameObject(arrowR,width/ 3 + 150, height/ 2));


		//this.characters.push(new GameObject(nikaidoMask,width/ 3 * 2, height/ 2));
		this.characters.push(new GameObject(kaimanMask,width/ 3 * 2, height/ 2));
		this.characters.push(new GameObject(arrowL,width/ 3 * 2 - 150, height/ 2));
		this.characters.push(new GameObject(arrowR,width/ 3 * 2 + 150, height/ 2));
	}

	setup() {

	}

	draw() {
		background('red');

		for (let i = 0; i < this.characters.length; i ++) {
			this.characters[i].draw();
		}
		
	}
}