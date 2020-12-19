class SchoolScene extends PlatformScene {
	constructor() {
		super();
		this.background = [];

		this.background.push(new GameObject(trainingSchoolInside, width/2 , height/ 2));
	}
	
}