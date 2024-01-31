const Rectangle = require('./5-square')

class Square extends Rectangle
{
    constructor(side)
    {
        super(side,side)
    
    }
    
    charPrint(c)
    {
        if (c === undefined)
        {
            c = 'X'
        }
         for (let i=0; i < this.height; i++)
         {
            console.log(c.repeat(this.width))
         }

    }

}
