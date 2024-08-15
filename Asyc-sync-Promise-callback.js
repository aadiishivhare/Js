// SYNC CODE
console.log("Sync Code");

console.log("Start");
console.log("Hello");
console.log("Stop");

// ASYNC CODE

console.log("Async code->");

console.log("Start");
setTimeout(()=>{
console.log("Hello"); // This hello will print very late 1 sec means next stop print ho jayega uske baad yeh hello print hoga
},1000);
console.log("Stop");

// ASYNC CODE EXAMPLE

console.log("Async Code with Example -->");

console.log("Start");

function important(username) {
    setTimeout(()=>{
        return `Welcome ${username}`  // this will print undefined because function cal would have done before its execution as it is run after 1 sec after sending request to web api 
    }, 1000)
}

const message = important("Aditya");
console.log(message); // here function call is happening // o/p --> undefined // it can be resolved only by callback


console.log("Stop");

