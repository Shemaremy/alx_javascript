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



































































