class Sling{
    constructor(objectA, pointB){
        var options={
            bodyA: objectA,
            pointB: pointB,
            stiffness: 1,
            damping: 0.1,
            length:500
        }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push();
        strokeWeight(7);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}