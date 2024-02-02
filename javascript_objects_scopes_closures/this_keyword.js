// a) USING this KEYWORD TO CALL MEMBERS OF AN OBJECT
const Obj = {
     name : "Remy",
     age : 30,
    
     Flacko() {
        console.log(this);
    }

    };

// Obj.Flacko();   //  { name: 'Remy', age: 30, Flacko: [Function: Flacko] }









// b) USING this TO RETURN MEMBERS OF OBJECT PART TWO

function Asap()
{
    return this;
}

const newObj = {
    name : "Remyboy",
    age : 45,
    Asap

};

let x = newObj.Asap();
console.log(x);               // Output : { name: 'Remyboy', age: 45, Asap: [Function: Asap] }
 




