class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal("Enter the Hospital", hospital, 1180, height  - 150, 'hospitalScene'));
		this.background.push(new Portal("Enter the Hole Market", market, 680, height  - 150, 'marketScene'));
		this.background.push(new Portal("Enter the Hungry Burg", tavern, 220, height - 120 , 'marketScene'));

		this.background.push(new GameObject(light, 360, height  - 200));
		this.background.push(new GameObject(light, 850, height  - 200));
		this.background.push(new GameObject(light, 1500, height  - 200));
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
	
