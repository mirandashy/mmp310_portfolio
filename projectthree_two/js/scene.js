
/*setup */ 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0 , 5 , 15 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );

// add shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShawodMap; 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls ( camera, renderer.domElement );

/* lighting */
const ambientLight = new THREE.AmbientLight( 0xB1B1B1, 0.5); // soft white light
scene.add( ambientLight );

const hemiLight = new THREE.HemisphereLight( 0xB2B2B2, 0x000000, 1 );
scene.add( hemiLight );

const directionalLight = new THREE.DirectionalLight( 0xB1B1B1, 0.25 );
directionalLight.position.set( 0, 31, 34 )
scene.add( directionalLight );

directionalLight.castShadow = true;
directionalLight.shadow.radius = 5;
directionalLight.shadow.mapSize.width = 512;
directionalLight.shadow.mapSize.height = 512;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 500;


/* scene */ 
const widthScene = 20;

// street
const streetGeo = new THREE.PlaneGeometry( widthScene, 8 );
const streetMat = new THREE.MeshStandardMaterial( { color : 0x1E1E1E, side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMat );
street.rotation.x = Math.PI * -0.5;
street.receiveShadow = true;
scene.add( street );

//sidewalk 
for ( let x = -widthScene / 2; x < widthScene / 2; x += 1 ) {
	const geo = new THREE.BoxGeometry( 0.95, 0.1, 0.95 );
	const mat = new THREE.MeshStandardMaterial( { color : 0x7B7B7B } );
	const sidewalk = new THREE.Mesh( geo, mat );
	sidewalk.position.set( x + 0.5 , 0.05, -2.4 );
	sidewalk.receiveShadow = true;
	scene.add( sidewalk );
}


// lights
for ( let m = -widthScene / 2 + 2; m < widthScene  / 2 ; m += 8 ) {
	const h = 3;
	const pointLight = new THREE.PointLight( 0xFF0000, 1, 4 );
	pointLight.position.set( m, 3, -2 );
	pointLight.castShadow = true;
	pointLight.shadow.mapSize.width = 512; // default
	pointLight.shadow.mapSize.height = 512; // default
	pointLight.shadow.camera.near = 0.5; // default
	pointLight.shadow.camera.far = 500; // default
	scene.add( pointLight );

	const lightStreet = new THREE.Group();
	
	const geo = new THREE.CylinderGeometry( 0.15, 0.15, h, 12 );
	const mat = new THREE.MeshStandardMaterial( { color : 0X000000 } );
	const pole = new THREE.Mesh( geo, mat );
	pole.position.set( m, 1.5, -2);
	pole.castShadow = true;
	pole.receiveShadow = true;
	scene.add( pole );

	const bulbGeo = new THREE.SphereGeometry( 0.35, 30, 5);
	const bulbMat = new THREE.MeshStandardMaterial( { color : 0xFFFD98 } );
	const bulb = new THREE.Mesh( bulbGeo, bulbMat );
	bulb.position.set( m, h, -2 );
	bulb.castShadow = true;
	bulb.receiveShadow = true;
	scene.add( bulb );

	
	
}


// buildings
	const geo = new THREE.BoxGeometry( 5 , 6, 5);
	const mat = new THREE.MeshStandardMaterial( { color : 0x6A6666} );
	const buildingOne = new THREE.Mesh ( geo, mat );
	buildingOne.position.set( -7.5, 3, -5.5 );
	buildingOne.castShadow = true;
	buildingOne.receiveShadow = true;
	scene.add( buildingOne );

	const geoTwo = new THREE.BoxGeometry( 4 , 7, 5);
	const matTwo = new THREE.MeshStandardMaterial( { color : 0x6A6666} );
	const buildingTwo = new THREE.Mesh ( geoTwo, matTwo );
	buildingTwo.position.set( 3.5, 3.5 , -5.5 );
	buildingTwo.castShadow = true;
	buildingTwo.receiveShadow = true;
	scene.add( buildingTwo );

	const geoThree = new THREE.BoxGeometry( 4.5 , 9, 5);
	const matThree = new THREE.MeshStandardMaterial( { color : 0x6A6666} );
	const buildingThree = new THREE.Mesh ( geoThree, matThree );
	buildingThree.position.set( 8, 4.5 , -5.5 );
	buildingThree.castShadow = true;
	buildingThree.receiveShadow = true;
	scene.add( buildingThree );

// windows first building 

for ( let x = - widthScene / 2 + 0.5 ; x < - 4.5 ; x += 1 ) {
	for ( let y = 0 ; y < 6; y += 1 ) {
		const pointLight = new THREE.PointLight( 0xFFFE00, 0.8, 0.5);
		pointLight.position.set( x, y - 2.5 , -2.9 );
		scene.add( pointLight );
		const geo = new THREE.PlaneGeometry( 0.2, 0.6 );
		const mat = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
		const windows = new THREE.Mesh( geo, mat );
		windows.position.set( x, y + 0.5 , - 2.9 );
		windows.castShadow = true;
		windows.receiveShadow = true;
		scene.add( windows );
	}
	
}

// windows second building 

for ( let x = 2; x < 6 ; x += 1 ) {
	for ( let y = 0 ; y < 6; y += 0.8 ) {
		const pointLight = new THREE.PointLight( 0xFFFE00, 0.8, 0.5);
		pointLight.position.set( x, y + 0.8, -2.9 );
		scene.add( pointLight );
		const geo = new THREE.PlaneGeometry( 0.6, 0.2 );
		const mat = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide } )
		const windows = new THREE.Mesh( geo, mat );
		windows.position.set( x, y + 0.8, - 2.9 );
		windows.castShadow = true;
		windows.receiveShadow = true;
		scene.add( windows );
	}
}

// windows third building
for ( let x = 6.5 ; x < 10 ; x += 1 ) {
	for ( let y = 0 ; y < 8; y += 0.8 ) {
		const pointLight = new THREE.PointLight( 0xFFFE00, 0.8, 0.5);
		pointLight.position.set( x, y + 0.5, -2.9 );
		scene.add( pointLight );
		const geo = new THREE.PlaneGeometry( 0.6, 0.2 );
		const mat = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide } )
		const windows = new THREE.Mesh( geo, mat );
		windows.position.set( x, y + 0.5, - 2.9 );
		windows.castShadow = true;
		windows.receiveShadow = true;
		scene.add( windows );
	}
}
	





// random range function
function random(min, max) {
	return Math.random() * (max-min) + min;
	// body...
}


/* load editor scene */
const loader = new THREE.ObjectLoader();
loader.load( ' js/scene.json', onLoad );

function onLoad( tavern ) {

	tavern.scale.set( 0.5, 0.5, 0.5);
	tavern.rotation.set(0, - 1.5708, 0 );
	tavern.position.set( 3, 0.2 , -3 );
	scene.add( tavern );
	animate();
}


 /* animation */

function animate() {

	controls.update();

	requestAnimationFrame ( animate );
	renderer.render ( scene, camera );
}



