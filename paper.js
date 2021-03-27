class paper{
    constructor(){
    var options ={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2
    }
    this.body=Matter.Bodies.circle(100,100,10,options)
World.add(world,this.body)
}
display(){
var pos=this.body.position;
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,10,10)

}

}