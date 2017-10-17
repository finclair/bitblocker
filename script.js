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

var leftPressed = false;
var rightPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 50;
var brickHeight = 10;
var brickPadding = 10;
brickOffsetTop = 2;
brickOffsetLeft = 5;

var bricks = [];
for (r=0; r<brickRowCount; r++) {
  bricks[r] = [];
  for(c=0; c<brickColumnCount; c++) {
  bricks[r][c] = {x: 0, y:0}
  
  }
}

function createBricks() {
  for (r=0; r<brickRowCount; r++) {
    for(c=0; c<brickColumnCount; c++) {
      var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
      var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
      bricks[r][c].x = brickX;
      bricks[r][c].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode == 37) {
    leftPressed = true;
  }
  else if(e.keyCode == 39) {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 37) {
    leftPressed = false;
  }
  else if(e.keyCode == 39) {
    rightPressed = false;
  }
}

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
  createBricks();

  if(x + dx > blockerX  && x + dx < blockerX + blockerWidth && y + dy > canvas.height-20) {
    dy = -dy;
  }

  if (y + dy < ballSize || y + dy > canvas.height-ballSize) {

    if (y + dy > canvas.height-ballSize) {
      //alert("GAME OVER");
      //document.location.reload();
    }
    dy = -dy;
  }

  if (x + dx < ballSize || x + dx > canvas.width-ballSize) {
    dx = -dx;
  }
 
  if (leftPressed && blockerX > 0) {
    blockerX = blockerX - 5;
  }
  else if (rightPressed && blockerX < canvas.width-blockerWidth) {
    blockerX = blockerX + 5;
  }

  x = x + dx;
  y = y + dy;
  
}


