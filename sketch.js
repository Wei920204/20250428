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
  drawOverlayGraphics();
}

function draw() {
  background('#caf0f8');
  
  // 水平翻轉畫布
  push();
  translate(width, 0); // 將原點移到畫布右上角
  scale(-1, 1); // 水平翻轉畫布
  
  // 顯示攝影機畫面
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
  
  // 顯示 overlayGraphics 在攝影機畫面上方
  image(overlayGraphics, (width - capture.width) / 2, (height - capture.height) / 2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新調整 overlayGraphics
  drawOverlayGraphics();
}

function drawOverlayGraphics() {
  overlayGraphics.background(0); // 設定背景為黑色
  for (let y = 0; y < overlayGraphics.height; y += 20) {
    for (let x = 0; x < overlayGraphics.width; x += 20) {
      // 從 capture 中取得對應位置的顏色
      let col = capture.get(x, y);
      let g = green(col); // 取得 G 通道值
      overlayGraphics.fill(0, g, 100); // 設定方框顏色，R 為 0，B 為 100
      overlayGraphics.noStroke();
      overlayGraphics.rect(x + 1, y + 1, 18, 18); // 繪製方框，稍微偏移以避免重疊

      // 繪製中間的黑色圓
      overlayGraphics.fill(0); // 黑色
      overlayGraphics.ellipse(x + 10, y + 10, 5, 5); // 圓心位於方框中心
    }
  }
}
