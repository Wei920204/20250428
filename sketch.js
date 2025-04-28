let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#caf0f8');
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();
}

function draw() {
  background('#caf0f8');
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}
