function Hello(callback) {
    console.log("Hello");
    callback();
}

function Goodbye() {
    console.log("Goodbye");
}

Hello(Goodbye);






/* SHORT NOTE
   ----------
   - By here, we used a short normal example. And when you run,
 */