class Ground{
    constructor(x,y,width,height){
        var options={
         isStatic:true
   }
   this.body=Bodies.rectangle(x,y,width,height,options);
   this.Visibility=0,0
   this.width=width;
   this.height=height;
   World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
    this.Visibility=this.Visibility-255
        rect(pos.x,pos.y,this.width,this.height);
    }
  };