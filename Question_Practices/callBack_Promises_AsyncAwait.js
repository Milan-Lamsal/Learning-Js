// ++++++++++++++++++ Async-Await +++++++++++++++++++++++++++++++++++++

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
      }, 2000);
    });
  }
  
  //  Async- await
  
  async function getAllData() {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
  }
//    IIFE : Immediately Invoked Function Expression

  (async function(){
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
  })();  // executing the function inside the IIFE immediately

//  async function hello(){ // it return a promise
//     console.log("hello");
// }

/*
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
 
async function getWeatherData() {
  await api(); // 1st
  await api(); // 2nd
}
*/



// ++++++++++++++++++++++++ Promises +++++++++++++++++++++++++++++++++++++++++

//  function getData(dataId){ // functuoin takes an argumetn detailId and returns a promise
//      return new Promise((resolve, reject)=>{ // creating a new promise
//          setTimeout(()=>{// simulating an asynchronous operation(like fetching data from server)
//              console.log("data",dataId);// printing the data
//              resolve("success");// resolving the promise with success message
//          }, 2000); // time delay of 2 seconds to mimic a time-consuming operation like fetching data from a database or an API
//      });
//  }

//   getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//         getData(3).then((res)=>{
//             console.log(res);
//         });
//     });
//   });
//
//
                                          //OR Promising Chain simple
//                          
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });

// ++++++++++++++++++++++++++++++++ Callback Hell  +++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++ CallBack Hell +++++++++++++++++++++++++++++++++++++++++

//Callback Hell

// function getData(dataId, getNextData){ // function takes two arguments detailId and getNextData
//     setTimeout(()=>{
//         console.log("data",dataId);// printing the data
//         if(getNextData){ // if getNextData is true
//             getNextData();// calling getNextData function
//         }

//     },2000);// calling hello function after 2 seconds
// }



//     getData(1, () => {
//         getData(2,()=>{
//             getData(3);
//         });
//     });

// getData(1, () =>{
//     console.log("getting data 2......");
//     getData(2, () => {
//         console.log("getting data 3......");
//         getData(3, () => {
//             console.log("getting data 4......");
//             getData(4);
//         });
//     });
// });


// // Basic CallBack Function

// function hello(){
//     console.log("I am batman");
// }
// setTimeout(hello, 3000); // calling hello function after 3 seconds