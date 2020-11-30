class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options)
        World.add(world, this.body)
        this.image = loadImage("mango.png")
    }
    display() {
        var mango = this.body.position
        var angle = this.body.angle
        push()
        translate(mango.x, mango.y)
        rotate(angle)
        strokeWeight(3)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}