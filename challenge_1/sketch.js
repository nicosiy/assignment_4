//Variable statements
var xPos = [];
var yPos = [];

function setup() {
	// Create Canvas
	createCanvas(640, 480);
	noStroke();
	noLoop();
	colorMode(RGB);
	background(100, 185, 235);
	fill(50, 150, 70);
	rect(0, 280, 640, 200);
	for (var i = 0; i < 40; i++) {
		xPos[i] = random(0, 640);
		yPos[i] = random(200, 400);
	}
}

function draw() {
	var size = 40;
	for (var i = 0; i < 30; i++) {
		// Stems
		fill(38, 120, 55);
		rect(xPos[i] - 2.5, yPos[i] - 2.5, 5, 100, 20);
		ellipse(xPos[i], yPos[i], 15, 15);
		//Flowers:
		// 1st Sphere
		fill(255, 255, 255, 85);
		ellipse(xPos[i], yPos[i], size, size);

		// 2nd Sphere
		fill(255, 255, 255, 90);
		ellipse(xPos[i], yPos[i], size - 10, size - 10);

		// 3rd Sphere
		fill(255, 255, 255, 95);
		ellipse(xPos[i], yPos[i], size - 20, size - 20);

		// 4th Sphere
		fill(255, 255, 255, 100);
		ellipse(xPos[i], yPos[i], size - 30, size - 30);

	}
}
