var bullet,speed,weight;
var thickness ,wall;

var speed,weight
function setup() {
  createCanvas(1600,400);
  speed = random (55,90);
  weight = random (400,1500)
  bullet = createSprite(1200, 200,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapecolor = (255);

  wall = createSprite(1500,200,60,height/2)
  wall.shapecolor = (255);
}

function draw() {
  background("black");  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      bullet.shapeColor=color("red");
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color("yellow");
    }
    if(deformation<100){
      bullet.shapeColor=color("green");
    }
  }
  if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed* speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapecolor = color (0,255,0);
  }
  if(damage<10)
  {
    wall.shapecolor = color(0,255,0);
  }
   hascollided(Lbullet,Lwall);
  drawSprites();
}
function hascollided(Lbullet,Lwall){
bulletRightEdge = lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=walllleftEdge)
{
  return true;
}
return false;

}
}
