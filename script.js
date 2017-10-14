var canvas = document.getElementById('canvasBoard');
var ctx = canvas.getContext('2d');

setInterval(draw, 20);

var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;

function createBall() {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}


function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  createBall();

  if(y + dy < 0 || y + dy > canvas.height) {
    dy = -dy;
  }
  if (x + dx < 0 || x + dx > canvas.width) {
    dx = -dx;
  }

  x = x + dx;
  y = y + dy;
}


