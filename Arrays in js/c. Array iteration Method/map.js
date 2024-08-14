// map makes a new array by applying a function to each element in an existing array.


/* Syntax : 

    let newArray = array.map(function(currentValue, index, array) {
    // Return element for newArray, based on currentValue, index, or array
    });

*/




// example 1:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]




// example 2:

const numbers2 = [1, 2, 3, 4, 5];

function addThree(num) {
    sum = num + 3;
    return sum;
}

const added = numbers2.map(addThree);
console.log(added);




