// slice(). Start and end represent the index of items in that array. The original array will not be modified.

/*  slice(a,b) : 
    
a: item at index a is included 
b: item at index b is not included, instead its where it ends at

*/


// Syntax : array.slice(start, end);


// ex:

let fruits = ['apple', 'banana', 'orange', 'pear', 'grape'];
let citrus = fruits.slice(2, 4);
console.log(citrus); // Output: ['orange', 'pear']


