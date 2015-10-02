//Create createCanvas
function setup() {
	createCanvas(640, 360);
	noStroke();
}

//Draw Circles and Lines
function draw() {
	background(50, 0, 0);
	if (mouseIsPressed) {

		//Line
		stroke(255);
		strokeWeight(8);
		line(50, 50, mouseX, mouseY);
		//Circle
		noStroke();
		fill(255);
		ellipse(100, 100, 50, 50);
		ellipse(mouseX, mouseY, 50, 50);
		//Blue Circle
		fill(0, 100, 250);
		ellipse(100, 100, 30, 30);
		ellipse(mouseX, mouseY, 30, 30);


	} else {
		fill(255);
		ellipse(mouseX, mouseY, 50, 50);
		fill(0, 100, 250);
		ellipse(mouseX, mouseY, 30, 30);
	}
}
