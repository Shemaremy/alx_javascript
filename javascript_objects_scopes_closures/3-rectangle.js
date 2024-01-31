 
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

    // This below is the only scope added 
    print()
        {
            for (let i=0; i < this.height; i++)
            {
                console.log('X'.repeat(this.width))
                // .repeat(this.width) will help us the first row to have nbr of X's same as width
            }
        }


};

//const rectangle = new Rectangle(3, 6);
//rectangle.print();

module.exports = Rectangle


/*
Probably, this is the previous code from 2-rectangle.js but we only Created an instance method (class method) 
called print() that prints the rectangle using the character X 
print is a function like others as we may name it flacko().
Run lines 29 and 30 to see the output

*/