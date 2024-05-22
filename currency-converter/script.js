//const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")


// for( currentcontry in countryList){
//     console.log(currentcontry, countryList[currentcontry])
// }

for(let select of dropdowns){
    // console.log(select);
    for( currentcontry in countryList){
            //console.log(currentcontry, countryList[currentcontry])
            let newoption = document.createElement("option");
            newoption.innerText = currentcontry;
            newoption.value = currentcontry;
            if(select.name === "from" && currentcontry === "USD"){
                newoption.selected = "selected";
            }else if(select.name === "to" && currentcontry === "INR"){
                newoption.selected = "selected";
            }
            select.append(newoption);
        }

    select.addEventListener("change",(evt)=>{
        updatedflag(evt.target);
    });
};


const updateExchange = async () => {
    let amount = document.querySelector(".amount input");
    let amntValue = amount.value; 
    if(amntValue === "" || amntValue < 1){
        amntValue = 1;
        amount.value = "1";
    }


    const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[tocurr.value.toLowerCase()]
    let finalamnt = amntValue * rate;
    msg.innerText = `${amntValue} ${fromcurr} = ${finalamnt} ${tocurr}`
};


const updatedflag = (element) => {
    let currentcontry = element.value;
    let countryCode = countryList[currentcontry];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

    //console.log(countryCode);
};

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchange();
});

window.addEventListener("load", () => {
    updateExchange();
});




