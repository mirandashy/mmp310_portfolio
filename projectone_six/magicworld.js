class MagicWorld extends MapScene {
	constructor() {
		super();


		for (let x = 0; x <= width; x += 160) {
		for (let y = 0; y <= height; y += 100) {
			this.mushMove.push(new MushMove(mushOne, x, y + frameCount % 100));
		}

	}
		for (var mushCounter = 0; mushCounter < 5; mushCounter += 1) {
			this.mush.push(new GameObject(mushTwo, 80, mushCounter * 120));
			this.mush.push(new GameObject(mushThree, 240, mushCounter * 120));
			this.mush.push(new GameObject(mushTwo, 400, mushCounter * 120));
			this.mush.push(new GameObject(mushThree, 560, mushCounter * 120));
			this.mush.push(new GameObject(mushTwo, 720, mushCounter * 120));
			this.mush.push(new GameObject(mushThree, 880, mushCounter * 120));
			this.mush.push(new GameObject(mushTwo, 1040, mushCounter * 120));
			this.mush.push(new GameObject(mushThree, 1200, mushCounter * 120));
			this.mush.push(new GameObject(mushTwo, 1360, mushCounter * 120));
			this.mush.push(new GameObject(mushThree, 1520, mushCounter * 120));
			this.mush.push(new GameObject(mushTwo, 1680, mushCounter * 120));
 	}

 		this.door.push(new Door(shinDoor, 500, height/2,"hole"));



	}

	setup() {

		player.x = width/2 ;
		player.y = height/ 2;
		
	}
}