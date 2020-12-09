class EntryScene {
	constructor() {
		this.tab = [];
		
		this.tab.push(new GameObject(startGameTab, width/2, height/2 + 50));

		

	}

	setup() {

	}

	draw() {
		background('red');

		for (let i = 0; i < this.tab.length; i ++) {
			this.tab[i].draw();
		}
		
	}
}