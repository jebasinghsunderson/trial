class Zombie{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
           density:10.0,
           friction:1.0 
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.Visibility=255
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.image=loadImage("zombie-1.png")
      
        World.add(world,this.body)
    }
 score1(){
     if(this.Visibility<0 && this.Visibility>-10){
       score=score+100  
     } }
    display(){
        if(this.body.speed<10){
          
            this.Visibility=255
            var pos=this.body.position
            push()
           translate(pos.x,pos.y)
           image(this.image,0,0,this.w,this.h)
          
            pop()
        }else{
           
            World.remove(world,this.body);

            push()
            this.Visibility=this.Visibility-5;
            
            tint(255,this.Visibility) ;
            image(this.image,this.body.position.x,this.body.position.y,300,300)
           pop()
        }
    }
}