class EntryScene {
	constructor(x, y) {

		this.x = x;
		this.y = y;
		this.tab = [];
		
		this.tab.push(new GameObject(startGameTab, width/2 - 100, height/2 + 50));
		this.tab.push(new GameObject(dorohedoroTitle, width/2 - 280 , height/2 - 150 ));


	}

	setup() {

	}

	draw() {
		background(0);

		for (let i = 0; i < this.tab.length; i ++) {
			this.tab[i].draw();
		}

	}
	
	mousePressed() {
				let tab = this.tab[0];
		if (mouseX > tab.x && mouseX < tab.x + tab.width &&
   		 mouseY > tab.y && mouseY < tab.y + tab.height) {
    	currentScene = characters;
		}
		
		
	
		}
}
