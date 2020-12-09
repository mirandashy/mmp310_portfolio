class ChooseCharacter {
	constructor(img, x, y, sceneToOpen) {
		this.img = img;
		this.x= x;
		this.y = y;

	}

	draw() {
		image(this.img, this.x, this.y);
	}

	selection() {
		if (shinMask) {
			holeScene
		} else if (noiMask) {
			holeScene
		} else if (nikaidoMask) {
			magicWorldScene
		} else if (kaimanMask) {
			magicWorldScene
		} else {
			characterScene;
		}
	}
}