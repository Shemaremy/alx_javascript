// THERE ARE 2 OJECTS IN JAVASCRIPT. ONES IN OOP AND OTHERS KNOWN AS NON-PRIMITIVE DATATYPES


// a) Objects as non-primitive datatypes (They always have key and value)

const a = {
    name : "Flacko",              // Ensure to put a comma after one element
    age : 35
};                                // : represent = and last curly brace ends with a semi-colon

console.log(a);


// b) Accessing element of an object and modify it:

a.name = "Asap Rocky";
a.age = a.age + 1;
console.log(a);




// c) Creating a function that will modify our object everytime it is called

a.M = function()                    // It says create a function M, which will access object a
{
    let x = this.age + 10;         // Now x = 46 but our object age is still 36
    this.age = x;                  // This is making our object age have the value of x which is 46   
    return x;
}

const newAge = a.M();                        // Call the method and store the updated age
console.log({ name: a.name, age: newAge });  // Output : { name: 'Asap Rocky', age: 46 }

console.log(a);                              // Output : { name: 'Asap Rocky', age: 46, M: [Function (anonymous)] }