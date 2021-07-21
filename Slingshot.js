class Slingshot {

constructor(A,B) {

var options = {

bodyA : A, 
bodyB : B,
length : 20,
stiffness : 0.2

}

this.body = Matter.Constraint.create(options);
World.add(world,this.body);
}

display() {

var pointA = this.body.bodyA.position;
var pointB = this.body.bodyB.position;

line(pointA.x,pointA.y,pointB.x,pointB.y);

}

}