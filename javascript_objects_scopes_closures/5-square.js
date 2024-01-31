/*
QUESTION:
Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:

You must use the class notation for defining your class and extends
The constructor must take 1 argument: size
The constructor of Rectangle must be called (by using super())

*/
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {

    // Constructor of the Square class, taking a single argument 'side'
    constructor(side) 
    {
        super(side, side);
        // The line above is calling the constructor from the parent class Rectangle in 4-rectangle file

        /* With calling, we called by using two arguments as the constructor in the previous file
           is defined using two arguments.
           
           So, when you create a Square object like new Square(5), both width and height will be set to 5, 
           and it represents a square with equal sides.
        */
    }
}
module.exports = Square;
