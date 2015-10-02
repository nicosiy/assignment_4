	//Variable statements

	// Stating Paddle Variable
	var paddle = {
		x: 0,
		y: 350,
		width: 300,
		height: 30,
	};

	// Stating Ball Variable
	var ball = {
		x: 500,
		y: 100,
		speedX: 5,
		speedY: 5,
		radius: 25
	};


	//Ceate Canvas
	function setup() {
		createCanvas(640, 480);
		noStroke();
	}

	function draw() {

		refreshBall();
		paddle.x = mouseX;

		background(50, 50, 50);
		ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
		rect(mouseX, paddle.y, paddle.width, paddle.height);

	}


	// refreshBall Function. Moves ball and detects collisions
	function refreshBall() {
		// change position
		ball.x = ball.x + ball.speedX;
		ball.y = ball.y + ball.speedY;


		// Walls
		// Right
		if (ball.x > 640 - ball.radius) {
			ball.speedX = -ball.speedX;
		}

		// Bottom
		if (ball.y > 480 - ball.radius) {
			ball.speedY = -ball.speedY;
		}

		// Left
		if (ball.x < 0 + ball.radius) {
			ball.speedX = -ball.speedX;
		}

		// Top
		if (ball.y < 0 + ball.radius) {
			ball.speedY = -ball.speedY;
		}

		// check for a *collision* between the ball and the paddle
		// look up the && operator

		if (ball.x > (paddle.x - paddle.width + 300) && ball.x < (paddle.x + paddle.width) &&
			ball.y > (paddle.y - ball.radius)) {
			if (ball.speedY > 0) {
				ball.speedY = -ball.speedY;
			}
		}
	}
