const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }
var ball_options={
  restitution : 2
}
  ground = Bodies.rectangle(200,390,300,20,ground_options);
  World.add(world,ground);
 ball= Bodies.circle(200,200,10,ball_options)
 World.add(world,ball)
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20) ;
circle(ball.position.x,ball.position.y,10)
//rect (200,200,30,30);
  drawSprites();
}