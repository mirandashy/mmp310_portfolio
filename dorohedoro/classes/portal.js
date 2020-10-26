class Door extends GameObject {
	constructor(img, x, y, sceneToOpen) {
		super(shinDoor, x, y);
		this.img = devilHouse;
		this.sceneToOpen = sceneToOpen; 
	}
}