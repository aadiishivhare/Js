const p1 = new Promise(function(resolve,reject){
    console.log("First Async1");
    setTimeout(function(){
        console.log("Done1");
        
    },2000)
    
})

p1.then()// consumption of promise
new Promise(function(resolve,reject){
    console.log("First Async3");
    setTimeout(function(){
        console.log("Done3");
        
    },3000)
    
}).then()// consumption of promise
const p2 = new Promise(function(resolve,reject){
    console.log("First Async 2");
    setTimeout(function(){
        console.log("Done2");
        resolve();
        
    },2000)
    
})

p2.then(function(){
    console.log("task 2");
    
})// consumption of promise


const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("p3 wala");
        resolve({username:"Aditya",age:22})
    },3000)
}) 

p3.then(function(user){
    console.log(user);
    
})

const p4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        var err = false;
        if(!err){
            resolve({username:"Aditya", password : "12345"})
        }
        else{
            reject("Error aa gya h")
        }
    },5000)
})

p4
.then((user) => {
    return user.username, user.password;   // This is callbackhell matlab user ko access krke uske andar ka element(username) de dega jo next then hi use kr skta h as then k chaining krni pdegi
    
})
.then((username) =>{
    console.log(username);
})
.then((password)=> {
    console.log(password);
    
})
.catch(function(err){
    console.log(err);
    
})
.finally(()=> {
    console.log("Ye message saare kam hone k baad print hota h");
    
})

// const p5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function name(params) {
    
// }