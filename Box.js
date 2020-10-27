class Box{
    constructor(x,y,width,height){
      var options = {
       restitution: 0.882109485723975649203847536576345176235716295761295,
       friction : 1.1283764198374981740958173490863148561948560198450,
       density: 0.050938475193450976450982019834598130498531097456109374
      }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    var ang = this.body.angle
    push();
    translate(pos.x, pos.y)
    rotate(ang)
    rectMode(CENTER)
    fill("brown")
    rect(0,0,this.width,this.height)
    pop();
    }
    
    }