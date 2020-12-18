class MagicScene extends MapScene {
	constructor(){
		super();

		this.background.push(new Portal(trainingSchool, 200, height / 2 - 100, 'schoolScene'));
		this.background.push(new Portal(turkeyHouse, 800, height / 2 - 80, 'turkeyHouseScene'));
		this.background.push(new Portal(enMansion, 1200, height / 2 - 200, 'enScene'));
	}


	draw() {
		background('black');

		noStroke();
		fill("grey");
		rect(0, height - 100, width, 100);

		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}

		player.draw();
	}

}
