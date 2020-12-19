class MarketScene extends PlatformScene {
	constructor() {
		super();
		this.background = [];

		this.background.push(new GameObject(marketInside, width/2 , height/ 2));
	}

	setup() {

	}
}