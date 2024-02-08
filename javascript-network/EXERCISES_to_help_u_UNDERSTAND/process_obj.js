// UNDERSTANDING THE LINE process object and module

/*
1)process

- First of all, as we know, any keyword that comes before a dot and another keyword is taken as an object
- So when we say process.argv[], process is an global and predefined (known by node js) object and keyword

- When we say a global object, it's because  it's accessible from any module in a Node.js application
  without needing to import it explicitly, it is known an object available in the Node.js environment.  

- When we say no need to import it explicitly we mean the way request module is imported by require() method
-  request is imported as: require('request').  That is explicitly way   

- The reason we use the process object is because its the only one that helps us to pass command line
  arguments through argv. We pass them in the terminal

- Uses of process are : a)To pass cmd line arguments, b) To know the process id (pid) your script is passed on / given,  c) To know your node version

 */


// a) ACCESSING CMD ARGUMENTS USING PROCESS  (we use argv[])

/*
i) Why need to access cmd line arguments?
------------------------------------------

To make your programs more flexible and interactive, and customisable whenever a developer tries to debug, etc

process.argv[0]: Path to the Node.js executable
process.argv[1]: Path to the script (name_of_file.js in this case)

process.argv[2]: 'arg1'
process.argv[3]: 'arg2'
process.argv[4]: 'arg3'

This means from 2 and above indexes will store arguments passed to your script in the terminal while running
the script


*/

console.log(process.argv)        // Provides only the paths if no arguments passed
console.log(process.argv[2]);   // The reason u get undefined here after running is because no cmd line arguments are passed to your script when running it.





























