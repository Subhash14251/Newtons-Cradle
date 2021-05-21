class Bob
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'isStatic': false,
        'friction':1,
        'density':3,
       'restitution':1.2
    }
   
    
    this.body = Bodies.circle(x, y, radius, options);
   this.radius= radius;
    
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    ellipse(0, 0, this.radius,this.radius);
    pop();
  }
};