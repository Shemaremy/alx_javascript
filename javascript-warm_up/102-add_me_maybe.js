function addMeMaybe (number, theFunction)
{
    number = number + 1;
    theFunction(number);
}


module.exports.addMeMaybe = addMeMaybe

/*
function Flacko(a)
{ 
    console.log("x was 5 now it is " , a);

}

let x = 5;
addMeMaybe(x, Flacko);

*/