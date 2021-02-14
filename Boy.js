class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("plucking+mangoes(2)/boy.png")      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
