class HoleScene extends MapScene {
	constructor() {
		super();

		this.background.push(new Portal("Enter the Hospital", hospital, 980, height /2  - 150, hospitalScene));
		this.background.push(new Portal("Enter the Hole Market", market, 580, height /2 - 150, marketScene));
		this.background.push(new Portal("Enter the Hungry Burg", tavern, 200, height /2 , tavernScene));

		this.background.push(new GameObject(light, 360, height / 2 - 150));
		this.background.push(new GameObject(light, 850, height  / 2 - 150));
		this.background.push(new GameObject(light, 1500, height  / 2 - 150));
		this.background.push(new GameObject(trash_bin, 420, height  - 120));
		this.background.push(new GameObject(trash_bin, 1500, height - 150));
	}
	}
	
    