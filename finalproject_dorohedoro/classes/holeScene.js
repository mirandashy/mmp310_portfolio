class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal(hospital, 1200, height - 210, 'hospitalScene'));
		this.background.push(new Portal(market, 650, height - 210, 'marketScene'));
		this.background.push(new Portal(tavern, 200, height - 160, 'marketScene'));

		this.background.push(new GameObject(light, 400, height - 200));
		this.background.push(new GameObject(light, 870, height - 200));
		this.background.push(new GameObject(light, 1550, height - 200));
		this.background.push(new GameObject(trash_bin, 500, height - 80));
		this.background.push(new GameObject(trash_bin, 1500, height - 100));
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
	
