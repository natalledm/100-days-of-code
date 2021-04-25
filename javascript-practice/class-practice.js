class Rectangle {
  constructor(width, heigth){
    this.width = width;
    this.heigth = heigth;
  }
}

// add a function to the class

Rectangle.prototype.area = function(){
  return this.heigth * this.width;
}

const rec = new Rectangle(3, 4);
console.log(rec.area());

// create a new class using the Rectangle class

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const sqre = new Square(4);
console.log(sqre.area());