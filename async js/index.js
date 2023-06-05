// note that we can use axios , fetch and also xmlhttprequest and these are alternative to each other.


// const axios = require('axios');

// function todos(callback) {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//       const data = response.data;
//       callback(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching todos.', error);
//     });
// }

// todos((data) => {
//   console.log('callback fired!');
//   // Use the 'data' received from the API response
//   console.log(data);
// });

// let  xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

// function todos(callback){
//     let request = new xmlhttprequest();

//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState ===4 && request.status == 200){
//             let data = JSON.parse(request.responseText)
//             callback(undefined,data);
//         }
//         else if(request.readyState === 4){
//             callback('Data could not fetch',undefined);
//         }
//         else{

//         }
//     })

//     request.open("Get","file1.json")

//     request.send();
// }

// console.log(1)
// console.log(2)

// todos((error, data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }

// })

// console.log(3);
// console.log(4);

// let  xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

//     let request = new xmlhttprequest();

//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState ===4 && request.status == 200){
//             let data = JSON.parse(request.responseText)
//             console.log(data);
//         }else{
//             console.log(request.responseText);
//         }

//     })

//     request.open("Get","file1.txt",true)

//     request.send();

// new code => callback hell

// let todos = (resource,callback) => {
//   let request = new XMLHttpRequest();

//   console.log(request, request.readyState);

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status == 200) {
//       let data = JSON.parse(request.responseText);
//       callback(undefined, data);
//       console.log(request, request.readyState);
//     } else if (request.readyState === 4) {
//       callback("Data could not fetched", undefined);
//       console.log();
//     }
//   });

//   request.open("Get", resource);
// console.log("open used")
//   request.send();
// };

// console.log(1);
// console.log(2);

// // chain of todos function(callback) => callback hell
// todos("file1.json", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
//   todos("ramu.json", (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//     }
//     todos("shamu.json",(error,data)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             console.log(data);
//         }
//     })
//   });
// });

// console.log(3);
// console.log(4);

// new code : Basics of Promise =>

// let todos = (resource, callback) => {
//   let request = new XMLHttpRequest();

//   console.log(request, request.readyState);

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status == 200) {
//       let data = JSON.parse(request.responseText);
//       callback(undefined, data);
//       console.log(request, request.readyState);
//     } else if (request.readyState === 4) {
//       callback("Data could not fetched", undefined);
//       console.log();
//     }
//   });

//   request.open("Get", resource);
//   console.log("open used");
//   request.send();
// };

//promises=>

// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//       resolve("Some data"); 
//     reject("error")
   
//   });
// };

// getSomething().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// promise example practical


// let todos = (resource) => {

//     return new Promise((resolve,reject)=>{
//         let request = new XMLHttpRequest();
  
//         // console.log(request, request.readyState);
      
//         request.addEventListener("readystatechange", () => {
//           if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.responseText);
           
//             resolve(data);
//           } else if (request.readyState === 4) {
//             reject("Error in fetching")
            
//           }
//         });
      
//         request.open("Get", resource);
//         // console.log("open used");
//         request.send();
    
//     })
// };
// // chaining of promises:
// todos("file1.json").then((data)=>{
//     console.log("Promise 1 resolved ",data);
//     return todos("./ramu.json")
// }).then((data)=>{
// console.log("Promise 2 Resolved",data);
// return todos("./shamu.json");
// }).then((data)=>{
//     console.log("Promise 3 Resolved ",data);
// }).catch((error)=>{
//     console.log(error)
// })

// here only one catch can be used , and many no of then can be used.


//new video: Fetch api



    
// fetch().then((response)=>{
//     console.log("Promise resolved",response);
//     return response.json();// returing promise
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
    
    // explanation
//     The Fetch API and promises are related but serve different purposes:

// Fetch API: The Fetch API is a modern JavaScript API for making HTTP requests and handling responses. It provides a more flexible and powerful way to interact with server-side resources compared to older methods like XMLHttpRequest. The Fetch API returns a promise that resolves to a Response object representing the response to the request.

// Promises: Promises are a core feature of JavaScript that allow you to handle asynchronous operations. A promise is an object that represents the eventual completion or failure of an asynchronous operation and provides a way to chain multiple asynchronous operations together. Promises have three possible states: pending, fulfilled (resolved), or rejected. Promises simplify asynchronous programming by providing a consistent and structured way to handle asynchronous operations.

// The Fetch API uses promises to handle asynchronous operations. When you make a request using the Fetch API, it returns a promise that resolves to a Response object. You can then use promise chaining to handle the response and any subsequent processing. The promise returned by the Fetch API can be resolved or rejected depending on the success or failure of the request.

// Here's an example to illustrate how the Fetch API and promises work together:

// javascript
// Copy code
// fetch('https://api.example.com/data')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Data:', data);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });
// In this example, the fetch function returns a promise, and subsequent .then() and .catch() methods are chained to handle the asynchronous operation. If the request is successful (response.ok is true), the response is converted to JSON using response.json(), which also returns a promise. The final .then() block handles the resolved promise with the JSON data. If any error occurs at any point, the .catch() block will handle it.


// new video :  asyc and await

// let getTodos = async()=>{
// const response = await fetch("file1.json")
// const data = await response.json()
// return data;
// }

// getTodos().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error);
// })


// creating a custom error:

// let getTodos = async()=>{
// const response = await fetch("file1.json")
// custom error:
// if(response.status !== 200){
//     throw new Error("Custom : Error in fetching the data")
// }
// const data = await response.json()

// 2nd file being fetched:
// let response2  = await fetch("ramu.json")
// let data2 = await response2.json();
 
// console.log(data,data2);

// }
 
// getTodos();

// error handling for async and await
// example
// try{
// let x = 4;
// const y = 8;
// y = 14;
// }

// catch(error){
// console.log(error.message)
// }

// applying try and catch on async and await
 
try{
    let getTodos = async()=>{
        const response = await fetch("file1.json")
        
        
        
        const data = await response.json()
        
        let response2  = await fetch("ramu.json")
        let data2 = await response2.json();
         
        console.log(data,data2);
        
        }
         
        getTodos();
}
catch(error){
    console.log(error.message)
}


// async on basic level completed.




    

