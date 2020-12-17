class MarketScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(marketInside, width/2 , height/ 2));
	}
}