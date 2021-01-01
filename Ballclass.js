class Ball{
    constructor(x,y,radius){
        push();
        var options={
            density:0.5,
            
            friction:0.5
        }
        pop();
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body)
        this.radius = radius;
    }
    display(){
        circle(this.body.position.x, this.body.position.y, this.radius*2);
    }
}