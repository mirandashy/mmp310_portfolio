class TurkeyHouseScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(turkeyHouseInside, width/2 , height/ 2));
	}
}