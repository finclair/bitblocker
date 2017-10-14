var canvas = document.getElementById('canvasBoard');
var ctx = canvas.getContext('2d');

setInterval(draw, 10);

var x = canvas.width/2;
var y = canvas.height -30;

function draw () {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI*2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

