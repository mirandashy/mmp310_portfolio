class HoleScene extends MapScene {
	constructor() {
		super();


		this.background.push(new GameObject(hospital, 1200, height - 210));
		this.background.push(new GameObject(market, 650, height - 210));
		this.background.push(new GameObject(tavern, 200, height - 160));
		this.background.push(new GameObject(light, 400, height - 200));
		this.background.push(new GameObject(light, 870, height - 200));
		this.background.push(new GameObject(light, 1550, height - 200));
		this.background.push(new GameObject(trash_bin, 500, height - 80));
		this.background.push(new GameObject(trash_bin, 1500, height - 100));

		

	}

setup() {
	
}

}