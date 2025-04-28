let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#caf0f8');
  
  // 初始化攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();

  // 建立與攝影機畫面相同大小的圖形緩衝區
  overlayGraphics = createGraphics(capture.width, capture.height);
  // overlayGraphics.background(255, 0, 0, 100); // 半透明紅色背景
  overlayGraphics.fill(255);
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('這是我的影像', overlayGraphics.width / 2, overlayGraphics.height / 2);
}

function draw() {
  background('#caf0f8');
  
  // 顯示攝影機畫面
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
  
  // 顯示 overlayGraphics 在攝影機畫面上方
  image(overlayGraphics, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新調整 overlayGraphics
  overlayGraphics.background(255, 0, 0, 100); // 半透明紅色背景
  overlayGraphics.fill(255);
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('Overlay Text', overlayGraphics.width / 2, overlayGraphics.height / 2);
}
