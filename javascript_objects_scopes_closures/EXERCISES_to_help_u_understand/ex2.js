class Shape {
    constructor(color) {
        this.color = color;
    }
    

    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

const x = new Circle("Red", 5);
x.draw();


/*
- I repeat, the only way to invoke the parent class method is by using super keyword ( super.draw() )
*/
