#!/usr/bin/node
class Rectangle
{
    constructor (w, h)
    {
        if (w > 0 && h > 0)
        {
            this.width = w
            this.height = h   
             
        }
        

    }

};

module.exports = Rectangle



/*
THE QUESTION:

Write a class Rectangle that defines a rectangle:

You must use the class notation for defining your class
The constructor must take 2 arguments w and h
Initialize the instance attribute width with the value of w
Initialize the instance attribute height with the value of h
If w or h is equal to 0 or not a positive integer, create an empty object


You may ask yourself that they told us to create an empty object if w or h is =< 0 and you cant see creation
such empty object.

Lets break it down:

- The above condition will be false if either w or h is 0 or negative. Because it's a must that both of them must be postitive
- When the condition is false, the resulting object will have width and height properties set to undefined
  implicitly by JavaScript, as this is the default behavior when properties are accessed but not assigned.

- We might have said that else, this.width = undefined, this.height = undefined but the alx checker wont
  approve it. Hence, it is set to undefined as default implicitly by the js

*/