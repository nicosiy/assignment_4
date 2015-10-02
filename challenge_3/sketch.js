//Create Canvas
function setup() {
	createCanvas(640, 480);
	noStroke();
}


//Draw Funtion
function draw() {
	background(77, 78, 96);

	//X Variables
	var xX = constrain(mouseX, -30, 220);
	var xY = constrain(mouseY, 0, 380);

	println("xX = " + xX);
	println("xY = " + xY);

	//Black Rect
	fill(0, 0, 0);
	rect(50, 50, 220, 380);

	// Draw the x
	fill(239, 65, 54);
	stroke(239, 65, 54);
	strokeWeight(18);

	line(23 + xX, 23 + xY, 78 + xX, 78 + xY);
	line(23 + xX, 78 + xY, 78 + xX, 23 + xY);
}
