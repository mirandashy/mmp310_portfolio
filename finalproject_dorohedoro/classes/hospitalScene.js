class HospitalScene extends MapScene {
	constructor() {
		super();

		this.background.push(new GameObject(hospitalInside, width/2 , height/ 2));
	}
}