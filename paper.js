 class paper
{
 constructor(x,y,radius){

 var option={
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2
}
 this.img=loadImage("paper.png")

 this.body=Bodies.circle(x,y,(radius-20)/2,option)
 this.x = x;
 this.y = y
 this.r = radius
 World.add(world,this.body)
}
display(){
    var paperpos =this.body.position;		

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    imageMode(CENTER);
    image(this.img, 0,0,this.r, this.r)
    pop()


}
}