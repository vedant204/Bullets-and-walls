var bullet,wall,thickness;
var speed,weight;

function setup() {
   
   createCanvas(1350,400);

   speed=random(223,321);
   weight=random(30,52);

   thickness=random(22,83);

   bullet=createSprite(50,200,50,20);
   bullet.velocityX = speed;
   bullet.shapeColor=color("white");

   wall=createSprite(1250,200,thickness,height/2);
   wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/3){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/22500;
    if (damage>180)
    {
      //bullet.shapeColor=color(255,0,0);
    
    }
    if (damage>180 && damage>100)
    {
      //bullet.shapeColor=color(230,230,0);
    
    }
    if (damage<100)
    {
      //bullet.shapeColor=color(0,255,0);
    
    }
    if (hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}