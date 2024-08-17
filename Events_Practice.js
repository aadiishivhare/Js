let btn1 = document.getElementById("btn1");
console.log(btn1);

btn1.onclick = ()=> {    // event ko arraow fn se access krna 
    console.log("Btn1 was clicked");
    var a = 2;
    a++;
    console.log(a);
    
}

// Agar koi event html file(inline) m and same event js file m likh diya toh --> JS FILE wala event ko jyada priority milti h

// agar same id k same event ko do ya jyada baar likh diya js file m toh last wala execute hota h


//Event object(e) --> it has all the details about that event and its object.

// It is passed as an argument and through it we can use all properties of it

const eo1 = document.getElementById("evntobjct");
eo1.onclick = (e) => {
    console.log(e);
    console.log(e.type); // this is a property of that event --> Gives type of event here --> click
    console.log(e.target); // o/ p--> 
    console.log(e.clientX, e.clientY);  // o/p --> differnt when you click on diff position  
}

// EventListeners --> Execute a function when the assigned event occurs, we can multiple eventlisteners to one event.

// Events are of two types --> addEventListeners, removeEventListeners

//Syntax --> node.addEventListener(event, callback)

// Remember onclick is an html attribute(that occurs when element is clicked and specifies js code to execute ) while click is a DOM event

btn1.addEventListener("click", (e)=>{
    console.log("1st addeventlistener");  
})
btn1.addEventListener("click", (e)=>{
    console.log("2nd addeventlistener");  
}) // Hence same object pr multiple event occur kra skte h // This is why addeventlistener is used

// The removeEventListener() method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

//Syntax --> node.removeEventListener(event, callback) // callback reference should be same  to remove

btn1.addEventListener("click", ()=>{
    console.log("3nd addeventlistener");  
})

btn1.removeEventListener("click", ()=>{
    console.log("2nd addeventlistener");  
}) // but idsse remove nhi huya as// referencesamenhi tha -->thus yeh naya hi fn bana dega 
// Hencepehle fn ko var m store kro

const r1 = () =>{
    console.log("Fn 4 ");   
}

btn1.addEventListener("click",  r1)

btn1.removeEventListener("click", r1) // yeh remove kr dega r1 ko but referencesame honachahiyebss

// Agar kisi object ka tagname janna ho jisse usko indicate kr pao andthen event laga pao toh niche wala code use krna

const div = document.querySelector(".whol")

div.addEventListener("click",(e)=>{
        console.log(e.target.tagName);
        
})

// Question --> Background color change kro jab bhi mouse click ho (Light to Dark and dark to light) 
var i=0;
// div.addEventListener("click",(e) => {
//     if(i%2==0){
//     document.querySelector("body").style.backgroundColor = "Black";
//     document.querySelector("body").style.color = "White";
//     i++
//     }
//     else{
//         document.querySelector("body").style.backgroundColor = "White"
//         document.querySelector("body").style.color = "Black"
//         i++;
//     }
//     console.log(i)
// })   --> This was my approach andaws working fine

// You can also change colors by changing class
const body =document.querySelector("body")
div.addEventListener("click",(e) => {
    if(i%2==0){
    body.classList.add("dark")
    body.classList.remove("light")   
    i++
    }
    else{
        body.classList.add("light")
        body.classList.remove("dark") 
        i++;
    }
    console.log(i)
})

