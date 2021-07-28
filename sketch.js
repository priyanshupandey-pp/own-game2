
var ball,stand,net;
function preload(){
  ball1=loadImage("100742.png")
  stand1=loadImage("stand.png")
  net1=loadImage("net.png")
}
function setup() {
  createCanvas(1000,650);
 ball=createSprite(520, 600, 50, 50);
 ball.addImage("asdf",ball1)
 ball.scale=0.0800

 net=createSprite(500,70,10,10)
 net.addImage("asd",net1)
 net.scale=0.5

 for (var i = 50; i < 1000; i=i+120) {
  var stand = createSprite(i, 160, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.0600
 }
  for (var i = 100; i < 1000; i=i+120) {
  var stand = createSprite(i, 320, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.0600
}
for (var i = 50; i < 1000; i=i+120) {
  var stand = createSprite(i,460, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.0600
 }
 for (var i = 100; i < 1000; i=i+120) {
  var stand = createSprite(i, 620, 20, 20);
  stand.addImage(stand1);
  stand.scale=0.0600
}
}

function draw() {

  if (keyDown("up")) {
    ball.velocityY = -2;
  }
  if (keyDown("right")) {
    ball.velocityX= 3;
  }
  if (keyDown("left")) {
    ball.velocityX = -3;
  }
  if(ball.position.y<150){
    fill("red")
    textSize(200)
    text("you win",130,10,300,20)
    playSpeech("you win")
    ball.velocityY=0;
    ball.velocityX=0;


  }
  background("green");  
  drawSprites();
}