class SchoolScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(trainingSchoolInside, width/2 , height/ 2));
	}
}