const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = [];

rl.question(`Enter length of array: `, (input) => {
    let len = parseInt(input);

    function askElement(index) {
        if (index < len) {
            rl.question(`Enter element ${index + 1}: `, (el) => {
                let element = parseInt(el);
                array.push(element); // Add the input to the array after converting it to a number
                askElement(index + 1); // Ask for the next element recursively
            });
        } else {
            console.log("Array:", array); // Log the array after all elements are entered
            rl.close(); // Close readline interface
        }
    }

    askElement(0); // Start asking for elements from index 0
});
