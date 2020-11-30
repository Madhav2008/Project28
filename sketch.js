const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var stone;
var ground;
var shooter;

function preload() {
    back = loadImage("back.png");
    boy = loadImage("boy.png");
    tree = loadImage("tree.png");
}

function setup() {
    createCanvas(1535, 718);

    engine = Engine.create();
    world = engine.world;

    mango1 = new Mango(950, 220, 70, 70);
    mango2 = new Mango(1050, 220, 70, 70);
    mango3 = new Mango(1150, 220, 70, 70);
    mango4 = new Mango(1250, 220, 70, 70);
    mango5 = new Mango(1350, 220, 70, 70);
    mango6 = new Mango(1450, 220, 70, 70);
    mango7 = new Mango(1100, 120, 70, 70);
    mango8 = new Mango(1200, 120, 70, 70);
    mango9 = new Mango(1300, 120, 70, 70);
    stone = new Stone(0, 400, 60);
    ground = new Ground(400, 650, 5000, 10);
    shooter = new Shooter(stone.body, { x: 120, y: 495 });

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(back);
    Engine.update(engine);
    image(boy, 50, 400, 350, 350);
    image(tree, 850, 0, 700, 700);

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    stone.display();
    shooter.display();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);
    detectCollision(stone, mango6);
    detectCollision(stone, mango7);
    detectCollision(stone, mango8);
    detectCollision(stone, mango9);

    strokeWeight(5);
    stroke("red");
    textSize(60);
    fill("black")
    text("'PRESS SPACE TO GET A SECOND CHANCE'", 50, 60);

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    shooter.fly();
}

function detectCollision(lstone, lmango) {
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if (distance <= lmango.r + lstone.r) {
        Matter.Body.setStatic(lmango.body, false)
    }
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stone.body, { x: 120, y: 495 })
        shooter.attach(stone.body)
    }
}