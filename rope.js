class Rope {
    constructor(bodyA, bodyB,offsetX, offsetY ){
        this.offsetX=offsetX;
    this.offsetY=offsetY;
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX, y:this.offsetY},
        
        //stiffness:0.7,
      
        }
       
    this.chain1=Constraint.create(options);
    World.add(world, this.chain1);
    }
    display(){
        var pointA =this.chain1.bodyA.position;
        var pointB= this.chain1.bodyB.position;

        strokeWeight(10);

        var A1X=pointA.x
		var A1Y=pointA.y

		var A2X=pointB.x+this.offsetX
        var A2Y=pointB.y+this.offsetY
        
        line(A1X, A1Y, A2X, A2Y);

    }
}