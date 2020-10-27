class Rope{
    constructor(bodyA,pointB){
      var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness: 1.21927834619873650197236501976501976597462984290348570123052984783019845612890475293846589098698136450928346905736092456098346059186359781364091860982107498928374098,
        length: 425.2394750912652751098346123509853632094856213470124398512456
      }
      this.pointB = pointB
      this.rope = Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(5.1203958612053819461092836412307845)
        stroke("grey")
        line(pointB.x,pointB.y, pointA.x,pointA.y)
        pop();
    }
    
    }