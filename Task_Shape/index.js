class Shape {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    console.log("Должен быть реализован в дочерних классах");
    return null;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    let area = Math.PI * this.radius ** 2;
    console.log(`Circle area: ${this.name} ${area.toFixed(2)} cm^2`);
    return area;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getArea() {
    let area = this.width * this.height;
    console.log(`Rectangle area: ${this.name} ${area} cm^2`);
    return area;
  }
}

const circle = new Circle("First circle", 10);
circle.getArea();

const rectangle = new Rectangle("First rectangle", 10, 20);
rectangle.getArea();
