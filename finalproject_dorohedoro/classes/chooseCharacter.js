class ChooseCharacter {
	constructor(img, x, y, characterName, sceneToOpen) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.characterName = characterName;
		this.sceneToOpen = sceneToOpen;

	}

	draw() {
		image(this.img, this.x, this.y);
	}

	mousePressed() {
		if (mouseX > this.x - 200 && mouseX < this.x + this.img.width &&
			mouseY > this.y - 200 && mouseY < this.y + this.img.height) {
			player.img = this.characterName;
			currentScene = this.sceneToOpen;
		}
	}

	
}