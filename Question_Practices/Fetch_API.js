const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.querySelector("#fact");
const Button = document.querySelector("#btn")

// let promise = fetch(URL);
// console.log(promise);

// 
const getInfo= async () => {
    console.log("Fetching data...");
    let response = await fetch(URL);// get request 
     console.log(response);//JSON format 
    // console.log(response.status) // JSON format 

    let dayta = await response.json();
    // console.log(data);
    console.log(dayta);
    factPara.innerText = dayta[0].data;

    // +++++++++++++++   with promise chain ++++++++++++++++++++++++++++++++++++++++++++++++

    // fetch(URL).then((response)=>{
    //     return response.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    //     factPara.innerText = dayta[0].data;
    // });

    Button.addEventListener("click", getInfo);
    
};
// getInfo();
