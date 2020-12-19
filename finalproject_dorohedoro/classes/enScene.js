class EnScene extends PlatformScene {
	constructor() {
		super();
		this.background = [];

		this.background.push(new GameObject(enMansionInside, width/2 , height/ 2));
	}

	setup() {

	}
}