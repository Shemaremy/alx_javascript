const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const array = [];

rl.question("Enter length of array: ", (len) => {
    
    let length = parseInt(len);                 // Cause length must be integer
    function looper(index){
        if (length > index) {
            rl.question(`Enter element ${index + 1} : `, (el) => {                
                array.push(el);
                looper(index + 1);             // Recursion, call it again to enter the next one
            })
        }
        else{
            console.log(array);
            rl.close();
        }   
    }
    let i = 0;
    looper(i); // We call it cause if we dont call it we wont input any
});
