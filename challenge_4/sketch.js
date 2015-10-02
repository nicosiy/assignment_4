//Stating Variables
var xPosition = [];
var yPosition = [];

//Create Canvas
function setup() {
	createCanvas(650, 500);
	noStroke();
	for (var i = 0; i < 10; i++) {
		xPosition[i] = random(0, 650);
		yPosition[i] = random(0, 500);

	}
}

//Draw Bg and Balls
function draw() {
	background(150, 0, 0);

	for (var i = 0; i < 10; i++) {
		xPosition[i] = xPosition[i] + random(-4, 4);
		yPosition[i] = yPosition[i] + random(-4, 4);
		fill(0, 255, 255);
		ellipse(xPosition[i] + 240, yPosition[i] - 130, 5, 5);

		ellipse(xPosition[i] - 90, yPosition[i] + 180,
			12, 12);

		ellipse(xPosition[i], yPosition[i], 25, 25);
	}
}
