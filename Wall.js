class Wall{
    constructor(x,y,w,h,angle){
      var options={
          isStatic:false,
          density:10.0,
          friction:1
      }
      this.body=Bodies.rectangle(x,y,w,h,options)
      this.x=x
      this.y=y
      this.w=w
      this.h=h
      this.angle=angle
      this.image=loadImage("eur.jpg")
     World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
       translate(pos.x,pos.y)
        rotate(this.body.angle)
       image(this.image,0,0,this.w,this.h)
        pop()
    }
    
}