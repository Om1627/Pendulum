const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chai
var g,h;
var ball;
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 
 g= new Ground(200,100,400,20);
h=new Box(200,380,100,20);
ball = new Particle(50);
chai = new Chain(g.body,ball.body);
}



function draw() {
  background("black"); 
  Engine.update(engine);
  g.display();
  h.display();
 ball.display();
 chai.display();

 strokeWeight(0);
 stroke("white");
text("Press space to move the pendulum and press enter to stop it ",50,20)

 if (keyCode===32){
  ball.body.position.x = mouseX;
  ball.body.position.y = mouseY;
 }
 else if (keyCode=== ENTER){
  ball.body.position.x = 200;

 }
}