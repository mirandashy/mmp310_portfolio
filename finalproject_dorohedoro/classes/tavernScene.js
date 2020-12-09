class TavernScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(tavernInside, width/2 , height/ 2));
	}
}