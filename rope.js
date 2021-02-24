class Rope{
    constructor(bodyA,pointB){
      var options={
          stiffness:1.5,
          length:10.0,
          bodyA:bodyA,
          pointB:pointB
      }
      this.pointB=pointB
      this.rope=Constraint.create(options)
      World.add(world,this.rope)

    }
    attach(body){
        this.rope.bodyA=body;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        var pointB=this.body.bodyA.position
        var pointA=this.body.pointB.position
      //fill("black")
      //
      //strokeWeight(4)
      //stroke("black")
        line(bodyA.x,bodyA.y,pointA.x,pointA.y,)

    }
}