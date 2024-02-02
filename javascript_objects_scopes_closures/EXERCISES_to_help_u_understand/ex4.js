// CALLING A PARENT CLASS USING SUPER KEYWORD

class Flacko
{
    constructor()
    {
        console.log("My name is Remyboy");
    }

    memi()
    {
        console.log("I am 48 years old");
    }
};

class AsapRocky extends Flacko
{
    constructor()
    {
        super();                    
        super.memi();           // It is impossible to call parent method without declaring super() before
    }
};


const X = new AsapRocky();
