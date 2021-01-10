var t =0;
const NUM_LINES = 50;

function x1(t){
	return sin(t/10)*100 + sin(cos(t/30)*10) *103;
}

function y1(t){
	return cos(t/10)*100 ;
}

function x2(t){
	return sin(t/10)*100 + sin(t/45)*66;
}

function y2(t){
	return cos(t/10)*100;
}

function setup() 
{
	createCanvas(400, 400);
	background(51);
}

function draw()
{
	background(51);
	stroke(255);
	strokeWeight(2);
	translate(width/2, height/2);
	for (let i = 0; i < NUM_LINES; i++) {
		line(x1(t+i), y1(t+i),x2(t+i), y2(t+i));
	}
	// line(x1(t), y1(t),x2(t+50), y2(t-23));
	// point(x1(t), y1(t));
	// point(x2(t), y2(t));
	t++;
}
