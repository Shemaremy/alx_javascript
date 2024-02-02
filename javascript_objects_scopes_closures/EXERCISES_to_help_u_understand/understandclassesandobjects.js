// 1)  ILLUSTRATING HOW A CONSTRUCTOR IS INVOKED AT THE BORN OF A NEW OBJECT
  
class Flacko
{
    constructor(a, b)
    { 
        this.x = a;
        this.y = b;
        console.log(this.x, this.y);    // Output: My name is Remyboy

        let n = this.x;
        let m = this.y;
        console.log(n, m);             // Same as output above
    }

};

// let output = new Flacko("My name is", "Remyboy");













































// 2) SHOWING HOW TO ACCESS A CLASS METHOD USING AN OBJECT

class Drake
{
    constructor(a, b)
    {
        this.x = a;
        this.y = b;
        console.log(this.x, this.y);
    }


    papi(c)
    {
        this.z = c;
        let v = console.log(this.z);
        return v;

    }

};

 // output = new Drake("I am", "Champagnepapi");
 // output.papi("Papi is my name");                 // Using the object output to invoke the class function papi















































// 3) ANOTHER EXAMPLE TO SHOW ACCESSIBILITY OF OBJECTS ON CLASSES AND OBJECTS

class Rectangle
{
    constructor(a, b)
    {
        this.w = a;
        this.h = b;
        console.log("The area is equal to : " + this.Area());   // OUTPUT:   The area is equal to : 15
    }

    Area()
    {
        return this.w * this.h;
    }

};

// out = new Rectangle(3, 5);
// let x = out.Area();
// console.log("The area is equal to : " + x);                    // OUTPUT:   The area is equal to : 15
















































// ILLUSTRATING HOW TO ACCESS VARIABLES IN A CLASS, IN A CONSTRUCTOR, AND  IN A CLASS METHOD


class m
{
     i = 20;        // When declaring variables outside methods and constructors, we never use let, var and const
    constructor()
    {   
        let x = 40;                     // No error but let wont allow your variables to be visible outside
        this.y = 50;                    // this keyword helps variables to be known outside
        console.log("Hello wrld");
    }

    Flacko()
    {
        m.z = 70;                       // At this time, to access a variable in a class method we use a class name dot our new variable
        this.w = 80;                    // At this time, this wont help us as in it did in the constructor
    }
};

// const n = new m();     //   Output : Hello wrld
// console.log(n);        //   Output : m { i: 20, y:50 }        (40 is not known because of let)
// console.log(n.i);      //   Output : 20
// console.log(n.x);      //   Output : undefined
// console.log(n.y);      //   Output : 50
// console.log(n.Flacko);    //   Output : [Function: Flacko]       (Never use brackets in printing)

// console.log(m.z);         // Output : undefined   (Accessing variable z in the method before calling it gives us undefined)

// n.Flacko();               // No output, we're just calling so as to access variable in class we're calling
// console.log(m.z);         // Output : 70
// console.log(m.w);         // Output : undefined  (Because this keyword wont help us this time)
























































