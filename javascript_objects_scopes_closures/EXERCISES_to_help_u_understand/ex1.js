class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() 
    {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {

    makeSound()                     // This is an overridden method
    {  
        console.log("Woof!");
     }

};

const x = new Dog("Buddy");
/*
- Creation of an object x 
- But because we have no parameterized constructor in our class Dod,
- Our program stops there and does nothing.
- It wont go in a parent class because we didnt call a parent class we just called a child one
*/

x.makeSound();
/*
- Using the object to invoke makesound method
- But we have two methods with the same name. What will the program do?
- The rules implies that in this case, the compiler will consider the overriden method in child class
- Because the only way to access the parent method is by using the super keyword only!
- By adding line super.makesound() in overridden method or child class
*/




