function Hello() {
    setTimeout(function() {
        console.log("Hello");
    },3000);
}

function Goodbye() {
    console.log("Goodbye");
}

Hello();
Goodbye();






/* SHORT NOTE
   ----------
   - By here, we used a short normal example. And when you run,
   - You will see that Goodbye will be printed first though it was called first,
   - And Hello will be called last though it is called first
   - But, I want that the Hello to be printed before. Check b.understand2.js
 */