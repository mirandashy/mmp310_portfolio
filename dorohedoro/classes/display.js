class Display {

	draw() {

		image(textBoxTwo, 180, 320);
		textBoxTwo.resize(300, 100);
		

		textFont('Roboto Mono');
		textAlign(LEFT, CENTER);
		fill("white");
		textSize(20);
		text ("score" + score, 140, 295);


		for (let i = 0; i < player.lives; i ++) {
			image(heartLives, 120 + i * 50, 330);
			heartLives.resize(36.9, 43.8);
			
		}



	}
}