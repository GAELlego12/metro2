class Metro extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("metro.png");
    Matter.Body.setAngle(this.body, angle);
  }
}