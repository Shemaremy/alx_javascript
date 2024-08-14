/* THE CODE BELOW WILL MAKE AN HTTP GET REQUEST TO THE URL THAT WILL BE PROVIDED IN THE TERMINAL AS A CMD LINE ARGUMENT

 */




const x = require('request')         // Making x an instance of request module 
const url = process.argv[2]          // urls and other arguments are kept in index 2 and above

x.get(url)                           // .get() with a dot is a method provided by the module request

.on('response', resp => { console.log("code:", resp.statusCode) } )














/* TO GET THE OUTPUT IN THIS CASE, WE DONT CLICK RUN INSTEAD WE DO THE FOLLOWING BELOW

- We run the syntax below in the terminal after writing the code above, 
  node "c:\REMYBOY2\ALX\GIT Files\alx_javascript\javascript-network\0-statuscode.js" https://instagram.com


     AFTER EXECUTING IN TERMINAL, THIS IS WHAT THE COMPILER DOES (explanation)

- require() is a function in Node.js that is used to import modules
- Here the require() method is importing request module 
- request module helps us to make http requests from the servers 
- Variable x is holding what will be calling the module named request. In other words, x is holding all the request operation that is taking place

- .get() is a method used to access methods and properties of an object that comes before it

- request.get(url) is making a request from your script (client-side) to the server specified by the URL,
  not from the server itself. The server processes the request and sends back a response to your script.



- When you make a request to a website (like request.get(url) does), the website responds back with
  some information. The .on('response', ...) part of the code waits for this response to come back
  from the website. Once the website responds, the resp => { console.log("code:", resp.statusCode) } 
  part kicks in. It's like saying, "When you hear back from the website, check what it says 
  (specifically, the status code), and then show it to me."

- So, this line is just there to listen for the website's response and then show you the status code
  of that response.

- A status code is a three-digit number returned by a web server in response to a request made by a client
  (such as a web browser or a script) to indicate the outcome of the request. Each status code has
   a specific meaning, helping both clients and servers understand the result of the request.





   EXPLAINING THE LINE .on('response', resp => { console.log("code:", resp.statusCode) } )



- .on(): This is a method used to set up an event listener. It tells the code to
         listen for a particular event.

- 'response': This is the type of event that the listener is waiting for. In this case, 
              it's waiting for the response event, which occurs when the server sends back a response 
              to the HTTP request.

- resp: This is a parameter that represents the response object. It's a convention to name this 
         parameter resp, short for "response", but you can name it anything you want.

- =>: This is an arrow function, a short way to define a function in JavaScript. It's saying 
      that when the response event occurs, the following code block should be executed.

-  { console.log("code:", resp.statusCode) }: This is the code block that will be executed when the 
    response event occurs. It's using console.log() to print out the status code (resp.statusCode) of 
    the response to the console.

): This is the end of the .on() method call. It closes off the method call and the arrow function.






   */ 

