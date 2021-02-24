const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;  
const INTRO=1
const SEC=2
const THIR=3
const FOUR=4
const BEFORE=5
const END=6
const WIN=7
var gameState=1
var shadow,shadowimg;
var backgroundimg;
var arrow,arrowimg;
var arrowrem=30;
var score=0
function preload(){
    shadowimg=loadImage("fighter.png")
    backgroundimg=loadImage("background.jpg")
    download=loadImage("download.jfif")
    download1=loadImage("download (1).jfif")
    background2img=loadImage("download (2).jfif")
    background3img=loadImage("endimg.jpg")
    background4img=loadImage("backfor.jfif")
    winbackimg=loadImage("win.jpg")
   // arrowimg=loadImage("arrow.png")
}
function setup(){
    engine = Engine.create();
	world = engine.world;

  shadow=createSprite(400,1500,100,100);
shadow.addImage("shah",shadowimg);
shadow.scale=0.4;


arrow=new Arrow(400,1100,200,100);

zombie=new Zombie(2800,1400,300,300);
//zombie2=new Zombie(1400,1600,300,300);
rope=new Rope(arrow.body,{x:400,y:1300});
dragon=new Dino(1600,1500,300,300);
dragon2=new Dino(2400,1600,300,300);
ground=new Ground(1500,1700,4000,40);
ground1=new Ground(3000,1100,40,4000);
ground2=new Ground(1700,320,4000,40);

wall1=new Wall(2100,1300,40,500,PI/7)
wall2=new Wall(1300,1300,40,500,PI/7)
wall3=new Wall(1400,1100,800,40,PI/7)

wall5=new Wall(3300,1300,40,500,PI/7)
wall6=new Wall(2500,1100,800,40,PI/7)
wall4=new Wall(2600,1300,40,500,PI/7)
}
function draw(){
    createCanvas(3500,1900);
    Engine.update(engine);
   if(gameState===1){
    background(download);
    stroke("black")
    strokeWeight(10);
     textSize(70)
     fill("red")
     text("LONG TIME AGO THERE WAS A VILLAGE, WHICH WAS A PEACEFUL VILLAGE",300,300)
     text("PRESS 'space' to continue",2400,1000)
   }
   if(gameState===2){
    background(download1);
    stroke("red")
    strokeWeight(10);
     textSize(100)
     fill("black")
     text("BUT SUDDENLY ZOMBIES ROSE FROM GROUND",200,300)
     text("PRESS 'm' to continue",2400,1000)
   }
   if(gameState===3){
    background(background2img);
    stroke("golden")
    strokeWeight(10);
     textSize(100)
     fill("black")
     text("WHO IS GOING TO STOP THESE..,",200,300)
     textSize(200)
     text("YOU ARE",1800,600)
     textSize(100)
     text("PRESS 'space' to continue",2200,1000)
   }
  if(gameState===4){
    background(background4img);
    fill("red")
    stroke("purple")
    strokeWeight(16);
    textSize(100)
    text("HOW TO PLAY:",200,200);
    textSize(70)
    text("DRAG YOUR MOUSE TO SHOOT AND PRESS SPACE TO RELOAD",900,700);
    text("YOU HAVE 30 CHANCES",900,800)
    text("AFTER 30 CHANCES YOU CAN'T PLAY THE GAME",900,900);
    text("PRESS 'm' to continue",2400,1000);
    
  }
    if(gameState===5){
      background(backgroundimg);
      stroke("red")
      strokeWeight(5);
      textSize(70)
      text("Arrow remaining:"+arrowrem,2600,100)
      text("score:"+score,300,300)
      arrow.display();
      zombie.display();
      zombie.score1();
      dragon.display();
      dragon2.display();
      dragon.score1();
     dragon2.score1();
      wall1.display();
      wall2.display();
      wall3.display();
      wall4.display();
      wall5.display();
      wall6.display();
     // zombie2.display()
      //zombie2.score1()
      //wall4.display();
      drawSprites()
    }
  if(score===400){
    gameState=7
  }
    if(arrowrem===0 &&gameState===5){
    gameState=6
    }
    if(gameState===6){
      background(background3img);
    
    }
    if(gameState===7  ){
      background(winbackimg);
    }
}

function mouseDragged(){
 

   Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
  arrowrem=arrowrem-1
}
function keyPressed(){
  if(keyCode===32&&gameState===5){
    Matter.Body.setPosition(arrow.body,{x:400,y:1500})
    rope.attach(arrow.body)
  }
  if(keyCode===32 && gameState===1){
      gameState=2
  }
  if(keyCode===77 && gameState===2){
    gameState=3
}
if(keyCode===32 && gameState===3){
  gameState=4
}
if(keyCode===77 && gameState===4){
  gameState=5
}

}