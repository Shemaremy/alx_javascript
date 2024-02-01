

function callMeMoby (x, theFunction)
{
    for (let i = 0; i < x; i++)
    {
        theFunction()
    }
}

/*

function Flacko() 
{
    console.log("Hello, I'm called by callMeMoby!");
}

callMeMoby(3, Flacko);
/*
- By calling the function callMeMoby,
- x will be assigned to 3, which will help the loop to know when to stop
- Parameter theFunction will be assigned to Flacko which is a function
- Then, when the condition is true in the loop, it will call theFunction() same as to call Flacko() because they are now the same
 


*/



module.exports.callMeMoby = callMeMoby
