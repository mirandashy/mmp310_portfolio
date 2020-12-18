class EntryScene {
	constructor(x, y) {

		this.x = x;
		this.y = y;
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
	mousePressed() {

		if (mouseX > this.x - 200 && mouseX < this.x + this.tab[0].width &&
            mouseY > this.y - 200   && mouseY < this.y + this.tab[0].height ) {
			currentScene = characters;
			
			}
		
	
		}
}
