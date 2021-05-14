const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var boogie
var rock

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
bg1=new Boogie(50,170,50,50)
bg2=new Boogie(150,170,50,50)
bg3=new Boogie(250,170,50,50)
bg4=new Boogie(350,170,50,50)
bg5=new Boogie(450,170,50,50)
bg6=new Boogie(550,170,50,50)
rock=new Rock(1100,200,100,100)
c1=new Chain(bg1.body,bg2.body)
c2=new Chain(bg2.body,bg3.body)
c3=new Chain(bg3.body,bg4.body)
c4=new Chain(bg4.body,bg5.body)
c5=new Chain(bg5.body,bg6.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show()
bg1.show()
bg2.show()
bg3.show()
bg4.show()
  bg5.show()
  bg6.show()
rock.show()
c1.show()
c2.show()
c3.show()
c4.show()
c5.show()
var collision = Matter.SAT.collides(bg6.body,rock.body);
  if(collision.collided) { flag=1; }
if(flag ===1){ textSize(30); stroke(3); fill('blue'); text("CRASH",500,200); crashSound.play(); }
  }
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
  Matter.Body.applyForce(bg6.body,{x:bg6.body.position.x,y:bg6.body.position.y}, {x:0.5,y:0});
  
  }
}
  
    
  
