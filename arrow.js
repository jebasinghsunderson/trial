class Arrow{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            density:1.3,
            restitution:1.2,
            
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.Visibility=255
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("arrow.png")
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        //rotate(angle)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}