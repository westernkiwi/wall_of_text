var canvasX, canvasY;
var fonts;
var textHeight, textWidth;
var torch;

function preload() {
	
	torch = loadImage("free torch.png")
	
	canvasX = windowWidth*.99
	canvasY = windowHeight*.965
}

function setup() {
	
	var myCanvas = createCanvas(canvasX, canvasY)
	myCanvas.parent("#canvas")
	textHeight = 0.075 * min(canvasX, canvasY)
	textWidth = textHeight / 2.2
//	noLoop()
}

function draw() {
	background(222)
	stroke(0)
	strokeWeight(2)
	textFont("courier")
	textSize(textHeight)
	textAlign(CENTER)
	for (var i = 0; i < 40; i++) {
		var randomX, randomY
		do {
			randomX = random(canvasX)
			randomY = random(canvasY)
		} while ((randomX > canvasX / 2 - textWidth * 11 && randomX < canvasX / 2 + textWidth * 11) && (randomY > canvasY / 2 - textHeight * 1.5 && randomY < canvasY / 2 + textHeight * 1.5))
			
		text("lost in my mind", randomX, randomY)
	}
	imageMode(CENTER)
	image(torch, canvasX / 2, canvasY / 2, textWidth * 6, textWidth * 6)
	
}