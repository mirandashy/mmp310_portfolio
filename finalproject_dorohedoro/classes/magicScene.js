class MagicScene extends MapScene {
	constructor(){
		super();

		this.background.push(new Portal("Enter the training School", trainingSchool, 350, height - 150, 'schoolScene'));
		this.background.push(new Portal("Enter the Turkey House", turkeyHouse, 800, height - 150, 'turkeyHouseScene'));
		this.background.push(new Portal("Enter En Mansion", enMansion, 1200, height - 200, 'enScene'));
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
