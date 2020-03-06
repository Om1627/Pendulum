class Particle {
    constructor(r) {
      var options={
        restitution:1.0,
        density:1.0
        
      }
      this.body = Bodies.circle(200,210,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      strokeWeight(1);
      stroke("red");
    ellipse(pos.x,pos.y, this.r);
    }
  };