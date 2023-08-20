class Shape {
    constructor() {
    }
    
    calculateArea() {
      return 0;
    }
    
    calculatePerimeter() {
      return 0;
    }
  }
  
class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    
    calculateArea() {
      return this.width * this.height;
    }
    
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
    
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    
    calculateArea() {
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }

  const rectangle = new Rectangle(4, 5);
  console.log('rectangle');
  console.log(rectangle.calculateArea());
  console.log(rectangle.calculatePerimeter());
  
  const circle = new Circle(3);
  console.log('circle');
  console.log(circle.calculateArea());
  console.log(circle.calculatePerimeter());
  
  const triangle = new Triangle(3, 4, 5);
  console.log('triangle');
  console.log(triangle.calculateArea());
  console.log(triangle.calculatePerimeter());