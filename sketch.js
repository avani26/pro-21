var bullet ,wall;
var speed,weight, thickness;
var damage;


function setup() {
  createCanvas(1600,400);

  speed= random(223,321);
  weight= random(30,52);
  thickness= random(22,83);


 bullet=createSprite(40, 10, 50, 50);
 bullet=color("white");
 wall=createSprite(1200, 200, thickness, height*2);
wall=color(80,80,80);
 
bullet.velocityX=speed;

 
}

function coolide(){
  if(bullet.isTouching("wall")){
    bullet.velocityX=0;
  damage= 0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
}

function tree(){
  if(damage<10){
    wall=color(0,225,0);
  }
}


function crimson (){
  if(damage>10){
    wall=color(225,0,0);
  }
}

function draw() {
  background(255,255,255); 
  
  coolide();
  tree();
  crimson();

  drawSprites();

}