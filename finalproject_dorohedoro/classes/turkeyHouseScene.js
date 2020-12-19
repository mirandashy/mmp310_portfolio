class TurkeyHouseScene extends PlatformScene {
	constructor() {
		super();
		this.background = [];

		this.background.push(new GameObject(turkeyHouseInside, width/2 , height/ 2));
	}
}