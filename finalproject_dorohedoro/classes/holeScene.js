class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal("Enter the Hospital", hospital, 980, height /2  - 150, 'hospitalScene'));
		this.background.push(new Portal("Enter the Hole Market", market, 580, height /2 - 150, 'marketScene'));
		this.background.push(new Portal("Enter the Hungry Burg", tavern, 200, height /2 , 'marketScene'));

		this.background.push(new GameObject(light, 360, height / 2 - 150));
		this.background.push(new GameObject(light, 850, height  / 2 - 150));
		this.background.push(new GameObject(light, 1500, height  / 2 - 150));
		this.background.push(new GameObject(trash_bin, 420, height  - 120));
		this.background.push(new GameObject(trash_bin, 1500, height - 150));
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
	
