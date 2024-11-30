var squareLength = 130;
var squareCount = 5;
var squares = [];
var aCol = 20;
var bCol = 255;
var currentCol = bCol;

class Square {
  constructor(x, y, l, c) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.c = c;
  }
  
  draw(r) {
    push();
    translate(this.x + 0.5 * this.l, this.y + 0.5 * this.l);
    rotate(r);
    fill(this.c);
    square(0, 0, this.l);
    pop();
  }
  
  get_col() {
    return this.c;
  }
}

function setup() {
  let l = squareLength * squareCount;
  createCanvas(l, l);
  stroke(255);
  strokeWeight(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  let col = aCol;
  
  for (let i = -1; i < squareCount + 1; i++) {
    for (let j = -1; j < squareCount + 1; j++) {
      let square = new Square(i * squareLength, j * squareLength, squareLength, col);
      squares.push(square);
      if (col == aCol) {
        col = bCol;
      }
      else {
        col = aCol;
      }
    }
  }
}

function draw() {
  let fc = frameCount % 90;
  // let currentAngle = 90 * cos(fc) + (frameCount * 2 % 90);
  let currentAngle = 90 * cos(fc);
  
  if (floor(currentAngle % 90) == 0) {
    if (currentCol == bCol) {
      currentCol = aCol;
    }
    else {
      currentCol = bCol;
    }
    
    currentAngle = 0;
  }
  
  if (currentCol == bCol) {
    background(aCol);
  }
  else {
    background(bCol);
  }
  
  for (let s of squares) {
    if (s.get_col() == currentCol) {
      s.draw(currentAngle);
    }
  }
}