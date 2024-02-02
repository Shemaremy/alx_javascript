// USING SUPER KEYWORD TO CALL PARENT CONSTRUCTOR AND PASS VALUES


class Parent {
    constructor(name) {
        this.n = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Calls the constructor of the parent class
        this.a = age;
    }
}

const X = new Child('John', 25);
/* Invoking child class constructor. Here, 
   - John is passed to name, 25 is passed to age
   - Line super(name); calls parent constructor and assigns John to name variable in parent constructor
   - In that parent constructor, we want to make that name visible everywhere
   - To achieve that, we use this keyword and new variable to represent that name
   - Then John will be stored in n, and because of this, n can be accessible everywhere

*/
console.log(X.n); // Output: John (Because of this keyword, n now is recognised everywhere)

