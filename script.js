var canvas = document.getElementById('canvasBoard');
var ctx = canvas.getContext('2d');

setInterval(draw, 20);

var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;
var ballSize = 3;

var blockerHeigth = 5;
var blockerWidth = 50;
var blockerX = (canvas.width-blockerWidth)/2;

function createBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function createBlocker() {
  ctx.beginPath();
  ctx.rect(blockerX, canvas.height-blockerHeigth-10, blockerWidth, blockerHeigth);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  createBall();
  createBlocker();

  if(y + dy < ballSize || y + dy > canvas.height-ballSize) {
    dy = -dy;
  }
  if (x + dx < ballSize || x + dx > canvas.width-ballSize) {
    dx = -dx;
  }

  x = x + dx;
  y = y + dy;
}


