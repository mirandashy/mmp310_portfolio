class HoleScene extends MapScene {
	super() {
		
		this.background.push(new Portal(hospital, 1200, height- 210, "hospital intern"));
		this.background.push(new Portal(market, 1200, height- 210, "market intern"));
		this.background.push(new Portal(tavern, 1200, height- 210, "tavern intern"));
	}

	setup() {

	}
}