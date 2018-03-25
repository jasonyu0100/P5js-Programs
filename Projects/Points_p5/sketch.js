
function setup() {
	createCanvas(400,400);
	points = [[33.1,4],[53.7,58.3],[45.4,36.3],[5.5,51.2],[72.1,26.6]];
}

function draw() {
	background(0);
	fill(255);
	for (point of points) {
		ellipse(point[0],height-point[1],10,10);
	}
}
