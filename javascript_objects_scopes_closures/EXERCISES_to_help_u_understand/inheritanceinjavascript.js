class parent
{
    constructor()
    {
        console.log("Hello, I'm the parent constructor");
    }

    parent_method()
    {
        console.log("Hey, I'm in the parent method");

    }


};

class child extends parent
{
    constructor()
    {
        console.log("Walidoo, I'm in the child constructor");
        super();                 // This super calls a parent class constructor
        super.parent_method();   // And this calls a parent class method

    }

    child_method()
    {
        console.log("Sup, I'm in the child method");

    }

};

let out = new child();            // Invoking the child class constructor
out.child_method();               // Invoking the child method


































class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound();


