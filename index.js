var penwidth = 1;
var pen = 1;
var r = 0,
  g = 0,
  b = 0;
let timer = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomWord();
}

function draw() {
  fill(255);
  noStroke();
  rect(width - 50, 0, 22, 20);
  time();
  fill(0);
  fill(0, 0, 0);
  rect(30, 20, 20, 20);

  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 20) {
      if (y > 530 && y < 550) penwidth = 1;
      else if (y > 550 && y < 570) penwidth = 3;
      else if (y > 570 && y < 590) penwidth = 5;
    } else {
      strokeWeight(penwidth);
      stroke(r, g, b);
      line(px, py, x, y);
    }

  }
  if (keyIsPressed)
    if (keyCode == BACKSPACE) {
      fill(255);
      noStroke();
      rect(0, 50, windowWidth, windowHeight);
    }
  textSize(20);
}

function time() {
  fill(0);
  textSize(20);
  text(timer, windowWidth - 50, 20);
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
 if (timer == 0) {
   textAlign(CENTER, CENTER);
   text("DRAWING OVER! Press s to save your image.", width/2, height/2);
 }
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('photo', 'png');
  }
}

function randomWord() {
  var theWord = [
    'Superman with a banana',
    'Goose with a hat',
    'Dog with a blog',
    'Man wearing a watch',
  ];

  var wordNum = Math.floor(Math.random() * theWord.length);

  textSize(20);
  text("Word: " + theWord[wordNum], windowWidth/2 - 80, 20);
}