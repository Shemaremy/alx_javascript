# BY HERE WE WILL DIVE A LITTLE DEEPER INTO CLASSES AND OBJECTS IN JAVASCRIPT (it is same as java)

1) HOW TO CREATE AN OBJECT
2) RULES OF A CONSTRUCTOR
3) HOW TO CALL MEMBERS OF A CLASS USING AN OBJECT
4) USE OF    (new)    KEYWORD
5) USE OF   (this)   KEYWORD
6) USE OF (super)   KEYWORD
7) INHERITANCE IN JAVASCRIPT 



---------------------------------------------------------------------------------------------------------------










1) HOW TO CREATE AN OBJECT
---------------------------
We create an object by using a new keyword. 
ex: const x = new Flacko();               // Ensuring Flacko is a class and x is an object

- Objects are always declared as variables (It's better u assign objects as constants)
- What goes in the parameters will be passed in class constructor

## ------------------------------------------------------------------------------------------------------------





2) RULES OF A CONSTRUCTOR
--------------------------
- Name of a constructor is always: constructor
- They are invoked automatically at the born of new object
- Constructors do not have a return type


3) HOW TO CALL MEMBERS OF A CLASS USING AN OBJECT
--------------------------------------------------
- Objects of a class include : constructor, methods, variables

- Constructor : Is called immediately when we create an object
- Method : We take the object, add a dot, then method name ( obj.method() ). In output:                     console.log(obj.method)  // We dont use parenthesis in outputting

- variables (There are 3 cases here. Variebles in a   class, constructor, method)
   (i) CLASS :   Obj.variable  // Ensuring variable is not declared as let, var or const. We assign it randomly
   (ii) CONSTRUCTOR :   Obj.variable  // Ensuring variable is declared using this. Like this.variable
   (iii) METHOD :   First call the method, then className.variable  // Ensuring that variable is declared as className.variable 



# -------------------------------------------------------------------------------------------------------------



4) USE OF    (new)    KEYWORD (4 uses)    // Find file new_keyword.js
  -------------------------------------

a) To create instances of a class (When we say instances we mean objects)   
b) To create instances of functions (Here the function is invoked at the born of an object)
c) To create arrays and their instances. By here we use () instead of []
d) To create dates (this is a built in object) and their instances 









5) USE OF   (this)   KEYWORD  // Find file this_keyword.js
 -----------------------------
- But from our projects, this is used to make constructor variables be known outside from it



6) USE OF (super)   KEYWORD    // Find ex3.js and ex4.js
   ------------------------
- It is mainly used in the context of classes (OOP), especially in class constructors
- It is used in inheritance to call constructor of the parent class in the child class
- Used to invoke the parent class method ( super();  super.parent_class_method(); )





7) INHERITANCE IN JAVASCRIPT
  ---------------------------

- We use keyword: extends

For more, find file inheritanceinjavascript.js

