class MagicScene extends MapScene {
	constructor(){
		super();

		this.background.push(new Portal("Enter the training School", trainingSchool, 200, height / 2 - 120, schoolScene));
		this.background.push(new Portal("Enter the Turkey House", turkeyHouse, 700, height / 2 - 90, turkeyHouseScene));
		this.background.push(new Portal("Enter En Mansion", enMansion, 1100, height / 2 - 200, enScene));
	}


}
