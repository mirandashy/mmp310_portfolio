
/*setup */ 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set( 0 , 5 , 15 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls ( camera, renderer.domElement );


/* scene */ 
const widthScene = 20;

// street
const streetGeo = new THREE.PlaneGeometry( widthScene, 16 );
const streetMat = new THREE.MeshBasicMaterial( { color : 0x5E5E5E, side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMat );
street.rotation.x = Math.PI * -0.5;
scene.add( street );

//sidewalk 
for ( let x = -widthScene / 2; x < widthScene / 2; x += 1 ) {
	const geo = new THREE.BoxGeometry( 0.95, 0.1, 0.95 );
	const mat = new THREE.MeshBasicMaterial( { color : 0x7B7B7B } );
	const sidewalk = new THREE.Mesh( geo, mat );
	sidewalk.position.set( x + 0.5 , 0.05, -2.4 );
	scene.add( sidewalk );
}

// buildings
//for ( let x = -widthScene/2; x < widthScene / 2; x+= 4 ) {
	//const h = random( 5, 10);
	//const w = 3.5;
	//const geo = new THREE.BoxGeometry( w , h, 5);
	//const mat = new THREE.MeshBasicMaterial( { color : 0xAFAFAF} );
	//const buildings = new THREE.Mesh ( geo, mat );
	//buildings.position.set( x + w / 2 , h / 2 , - 5.5 );
	//scene.add( buildings );
//}

// lights
const numLight = 5;
for (let i = 0; i < numLight; i++) {
	const light = new THREE.Group();
	const h = 3;

	const geo = new THREE.CylinderGeometry( 0.15, 0.15, h, 12 );
	const mat = new THREE.MeshBasicMaterial( { color : 0X000000 } );
	const pole = new THREE.Mesh( geo, mat );
	light.add( pole );

	const numBulb = 5;
	for (let j = 0; j < numBulb; j++ ) {

		const bulbGeo = new THREE.SphereGeometry( 0.35, 30, 5);
		const bulbMat = new THREE.MeshBasicMaterial( { color : 0xFFFD98 } );
		const bulb = new THREE.Mesh( bulbGeo, bulbMat );
		bulb.position.set( 0, h/2, 0 );

		light.add( bulb );

	}

	let x = random(-widthScene / 2, widthScene / 2);
	light.position.set( x , h / 2, -2 );
	scene.add( light );
	
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
	tavern.rotation.set( -1.5708, 1.5708, 1.5708 );
	scene.add( tavern );
	animate();
}


 /* animation */

function animate() {

	controls.update();

	requestAnimationFrame ( animate );
	renderer.render ( scene, camera );
}



