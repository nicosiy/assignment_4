var ballX = 0;
var ballY = 0;

//Create createCanvas
function setup() {
	createCanvas(640, 360);

}

function draw() {
	background(150, 150, 50);
	if (mouseIsPressed === false) {
		ballX = mouseX;
		ballY = mouseY;
	}
	ellipse(ballX, ballY, 50, 50);

	ellipse(mouseX, mouseY, 50, 50);
	stroke(255, 255, 255);
	strokeWeight(8);
	line(mouseX, mouseY, ballX, ballY);

}
