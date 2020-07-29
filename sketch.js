const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,bally;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
 
  ground = Bodies.rectangle(200, 390, 400, 50, ground_options);
  World.add(world, ground);

 var bally_options = {restitution:1}
  bally = Bodies.circle(200,100,30, bally_options);
  World.add(world, bally);


}
function draw() { 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

ellipseMode(RADIUS);
ellipse(bally.position.x,bally.position.y, 30,30);

}
//ellipse --oval shape -- 2 radii -- when 2 radius equal, it becomes a circle
/*
Physics engine
--Matter library

Engine -Universe (Matter.Engine)
World  -          (Matter.World)
Bodies -objects - pigs, bird, boxes, logs, ground  (Matter.Bodies)

NAMESPACING

Properties -- Attributes
Functions -- Methods

Passing options

Restitution -- bounciness of the object
*/






