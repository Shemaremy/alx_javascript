const myObject = {
    type: 'object',
    value: 12
  };


  console.log(myObject);
  // Output: { type: 'object', value: 12 }
  


  
 

  myObject.incr = function ()
    {
       x = ++this.value;
       return x;
    };
// This is helping us access the object initially and add the value by 1, and everytime incr() is called it adds that initial value to get a new value





  myObject.incr();
  console.log(myObject);
  // Output: { type: 'object', value: 13 }
  
  myObject.incr();
  console.log(myObject);
  // Output: { type: 'object', value: 14 }
  
  myObject.incr();
  console.log(myObject);
  // Output: { type: 'object', value: 15 }
  