// This is how readline module in Node.js is asynchronous. The reason why cant use the for in this array example. I would suggest using recursion instead


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = [2];

rl.question("Enter length of your array: ", (len) =>{
    let length = parseInt(len);
    
    if (len > 0) {
        for (let i = 0; i < length; i++) {
            rl.question(`Enter element ${i+1}:` ,(el) => {
                let element = parseInt(el);
                array.push(element);
            })
        }
        rl.close();
        console.log(array);
    }
})

