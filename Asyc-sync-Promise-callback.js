// // SYNC CODE
// console.log("Sync Code");

// console.log("Start");
// console.log("Hello");
// console.log("Stop");

// // ASYNC CODE

// console.log("Async code->");

// console.log("Start");
// setTimeout(()=>{
// console.log("Hello"); // This hello will print very late 1 sec means next stop print ho jayega uske baad yeh hello print hoga
// },1000);
// console.log("Stop");

// // ASYNC CODE EXAMPLE

// console.log("Async Code with Example -->");

// console.log("Start");

// function important(username) {
//     setTimeout(()=>{
//         return `Welcome ${username}`  // this will print undefined because function cal would have done before its execution as it is run after 1 sec after sending request to web api 
//     }, 1000)
// }

// const message = important("Aditya");
// console.log(message); // here function call is happening // o/p --> undefined // it can be resolved only by callback


// console.log("Stop");

// // Callback

// console.log("Callback Example");

// console.log("Start");

// function imp1(username,cb) {
//     setTimeout(()=> {
//             cb(`Welcome ${username}`) // Now the o/p is njot undefined, it wil print welcome aditya time because this is called as an argument in a function 
//     },1000)
// }

// const message1 = imp1('Aditya',function(message1){
//     console.log(message1);    // this log will be executed only after settimout completes then its callback fn then inside that this log will executed
// })

// console.log("Stop");

// Callback hell

console.log("Callback Hell Example");

console.log("Start");

function imp2(username,cb) {
    setTimeout(()=> {
            cb(`Welcome ${username}`) 
    },3000)
}

function like1(surname,cb) {
   setTimeout(() => {
    cb(`Welcome ${surname}`) // this have 1sec as time which is less than imp2's time (3sec) but still this will be executed only after imp2 gets executed boz of call hell used in message2
   },1000)
}

const message2 = imp2('Aditya',function(message2){
    console.log(message2);
    like1("Shivhare", (action)=>{
        console.log(action);  // this will be executed only after first function(imp2) irrespective of time alloted // this is callback hell 
        // we can add more fn inside like this but its gonna make our cpode nasty , hence Promises is used.
    })

})

console.log("Stop");

//Promises

