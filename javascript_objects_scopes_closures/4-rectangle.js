/*
We are modifying the previous code to 
- Create an instance method called rotate() that exchanges the width and the height of the rectangle
- Create an instance method called double() that multiples the width and the height of the rectangle by 2
 */
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


    print()
        {
            for (let i=0; i < this.height; i++)
            {
                console.log('X'.repeat(this.width))
                 
            }
        }

        // new methods added
        rotate()
        {
            [this.width, this.height] = [this.height, this.width]
        }

        double()
        {
            this.width *= 2
            this.height *= 2
        }

};


module.exports = Rectangle


 


