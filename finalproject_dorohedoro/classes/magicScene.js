class MagicScene extends MapScene {
	constructor(){
		super();

		this.background.push(new Portal(trainingSchool, 250, height - 160, 'schoolScene'));
		this.background.push(new Portal(turkeyHouse, 800, height - 190, 'turkeyHouseScene'));
		this.background.push(new Portal(enMansion, 1300, height - 200, 'enScene'));
	}


	draw() {

		noStroke();
		fill("grey");
		rect(0, height - 100, width, 100);

		for (let i = 0; i < this.background.length; i ++) {
			this.background[i].draw();
		}
	}

}
