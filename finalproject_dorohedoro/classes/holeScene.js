class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal(hospital, 980, height / 2 - 100, 'hospitalScene'));
		this.background.push(new Portal(market, 480, height / 2 - 100, 'marketScene'));
		this.background.push(new Portal(tavern, 120, height / 2 , 'marketScene'));

		this.background.push(new GameObject(light, 360, height / 2 - 100));
		this.background.push(new GameObject(light, 850, height / 2 - 100));
		this.background.push(new GameObject(light, 1500, height / 2 - 100));
		this.background.push(new GameObject(trash_bin, 400, height - 70));
		this.background.push(new GameObject(trash_bin, 1500, height - 70));
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
	
