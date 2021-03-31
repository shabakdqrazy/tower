const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground;

function preload(){
    polly = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1000,800)
    engine=Engine.create()
    world = engine.world
    ground = new Ground(500,750,1000,20)     
}
function draw(){
    background("black")
    Engine.update(engine)
    fill("brown")
    ground.display;
}
