class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }
    display() {
        var stone = this.body.position;
        var angle = this.body.angle;
        push();
        translate(stone.x - 30, stone.y - 20);
        rotate(angle);
        strokeWeight(3);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}