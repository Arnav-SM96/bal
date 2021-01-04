class Paper{
    constructor(x,y,radius)
    {
         var options= {
        restitution: 1 ,
        friction:0.5,
            density:1.2,
            isStatic:false
      
    } 
   
    this.body = Bodies.circle(x,y,radius,options);
    
    World.add(world,this.body); 
    
    }
    display()
    { var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("gold");
	

    
    ellipse(0,0,this.width,this.height);
  //  imageMode(CENTER);
 //   image(this.image, 0, 0, 70, 70);
   // image.scale=5;
    pop();
    }
    }