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

// Callback

console.log("Callback Example");

console.log("Start");

function imp1(username,cb) {
    setTimeout(()=> {
            cb(`Welcome ${username}`) // Now the o/p is njot undefined, it wil print welcome aditya time because this is called as an argument in a function 
    },1000)
}

const message1 = imp1('Aditya',function(message1){
    console.log(message1);    // this log will be executed only after settimout completes then its callback fn then inside that this log will executed
})

console.log("Stop");

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
        //It will become pyrimaid of dom after adding more fn which is called callback hell.
    })

})

console.log("Stop");

// Promises

// Promises represents the upcoming completion or failure of asynchronous event and its resulting Value.
console.log("Start");

// .Promise declaration

const pr1 = new Promise((resolve, reject) => { // Inside this is a async code
    setTimeout(() => {
        const result = true;
        if(result)
        {
            resolve("Promise is fulfilled")
        }
        else{
            reject(new Error("Promise Failure"))
        }
    },1000);
} )

// .Promise Consumption

console.log(pr1); // Here it will return Promise as object and pending status would be there and then Output would be printed after the allotted time(2 sec here) completes. // Hence use .then  and .catch

pr1.then((res)=>
{
    console.log(res);
    
})
.catch((err) => {
    console.log(err);
    
}) 

console.log("Stop");

// Direct resolve and reject

console.log("Start");

const pr2 = Promise.resolve("Hello ji ");// This is async operation here also// hence will print after sync operations get completed // Samerejkect k sath bss Resolve k jagah reject likh do
pr2.then((res)=> {
    console.log(res);
    
})
.catch((err)=> {
    console.log(err);
    
})

console.log("Stop");

// Rewriting callback with Promises ( Now Let's see how promises can solve callback hell problem)

console.log("start");

 function name3(username) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(`Welcome, Your Name : ${username}`) 
    },3000)
    })
}

function sur3(surname) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
    resolve(`Your Surname : ${surname}`) 
   },1000)
  })
}

function age3(age) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
    resolve(`Your Age : ${age}`) 
   },1000)
  })
}

// Now we want to make name3 fn run first and then sur3 run (only after name3 gets fulfilled (or executed ) otherwise don't execute it) and then age3 run only after sur3 gets executed

name3("Aditya")
.then((res)=>{
    console.log(res);
    sur3("Shivhare")
    .then((res)=>{
        console.log(res);
        age3(22)
        .then((res)=> {
            console.log(res);     // Supposeif you want executethis function only afteran error ocurs in any fn--> then you could write this that fn's catch block      
        })
        
    })
})
.catch((err)=> {
    console.log(err);
    
})

console.log("Stop");


// Promise Chaining

// Again in above example Callback hell solve krne k chakkar m promise hell bn gya tha
// Promise hell k jagah Promise Chaining Use kr skte hio
// Promise chaining m --> second promise ko first promise k .the m return krdo fir .then chala do jo ki uss naye promise ka h

console.log("Start");

function name3(username) {
         return new Promise((resolve, reject) => {
            setTimeout(()=> {
                // resolve(`Welcome, Your Name : ${username}`) 
                reject("Sorry NO Entry found in database")
        },3000)
        })
    }
    
    function sur3(surname) {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
        resolve(`Your Surname : ${surname}`) 
       },1000)
      })
    }
    
    function age3(age) {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
        resolve(`Your Age : ${age}`) 
       },1000)
      })
    }
    
    name3("Aditya")
    .then((res)=>
    {
        console.log(res);
        return sur3("Shivhare"); // This will run only after resolve works or name3 promise fulfilled
    })
    .then((res)=>
    {
        console.log(res);
        return age3(22);
        
    })
    .then((res)=> {
        console.log(res);
        
    })
    .catch((err)=> {
        console.log(err);
        
    })
console.log("STOP");

// This process is still lengthy

// Promise Combinator

// Promise combinator are used to help us execute more than one promise at one time and return the result acccordingly
// There are four types of promise combinators -->

// 1. Promise.all() its gonna run all the provided promises in parallel and then return the array of all fulfilled promises

console.log("Start");

function name3(username) {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           resolve(`Welcome, Your Name : ${username}`) 
           // reject("Sorry NO Entry found in database")
   },3000)
   })
}

function sur3(surname) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   resolve(`Your Surname : ${surname}`) 
  },1000)
 })
}

function age3(age) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   resolve(`Your Age : ${age}`) 
  },1000)
 })
}

const prall =  Promise.all([
    name3("Aditya"),
    sur3("Shivhare"),
    age3(22)
])
.then((res)=> {
    console.log(res);
})
.catch((err)=> {
    console.log("Error occurs , this promise failed ", err); // err wo ho jo failed promise ka reject dega
    
})

console.log(prall); // It will give in object format or array fornmat

console.log("Stop");

// 2. Promise.race() ---> This gives the promise which gets executed first(means jiska sabse kam time ho)  // JUst like promise .all bus all k jagah race lagana h

// 3. Promise.allSettled() --> This is gonna give the promises which are fulfilled, diff b/w .all and .allsettled is that all wala execute nhi hoga agar ek bhi promise falied ho gya toh and allsettled m jo jo fulfilled ho gye wo execute ho jayenge  

// 4. Promise.any() --> its gonna execute only foirst fulfilled promise // diff b/w .race() and any() is that any pehla fulfilled hio execute krayega while race koi sa bhi first promise execute krayega 

// ASYNC/AWAIT
// Best approach when we want to promises to be executed one after the other

console.log("Start");

function name3(username) {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           resolve(`Welcome, Your Name : ${username}`) 
           // reject("Sorry NO Entry found in database")
   },3000)
   })
}

function sur3(surname) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   resolve(`Your Surname : ${surname}`) 
  },1000)
 })
}

function age3(age) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   resolve(`Your Age : ${age}`) 
  },1000)
 })
}

// Await keyword promise_name k aage lgane se voh uss prmise ko execute hone tkk ka fn ko wait krwata h and then value return kr deta h// also voh fn asynchota h isliye async keyword aagelaga do

const result1 = async () => { // agar yha async keyword nhi likhoge toh error aa jayega s await keyword sirf async fn k sarth usehote h
    const message1 = await name3("Aditya")
    const message2 = await sur3("Shivhare")
    const message3 = await age3(22)

    console.log(message1, message2, message3);
    
}

result1()
 

// name3("Aditya")
// .then() // Khali .then o/p print nhi krwayega
console.log("Stop");

// Now let's move on to most cleanest and efficient way of romise resolver

// Using Try and catch block also

console.log("Start");

function name3(username) {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           resolve(`Welcome, Your Name : ${username}`) 
           // reject("Sorry NO Entry found in database")
   },3000)
   })
}

function sur3(surname) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   reject(`Your Surname : ${surname}`) 
  },1000)
 })
}

function age3(age) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
   resolve(`Your Age : ${age}`) 
  },1000)
 })
}

const result = async () => { // agar yha async keyword nhi likhoge toh error aa jayega s await keyword sirf async fn k sarth usehote h
   try {
    const message1 = await name3("Aditya")
    const message2 = await sur3("Shivhare")
    const message3 = await age3(22)

    console.log(message1, message2, message3);
   } catch (error) {
        console.log("Error aa gya h", error);
        
   }
    
} // o/p --> Error aa gya h Your Surname : Shivhare

result();
 


console.log("Stop");

