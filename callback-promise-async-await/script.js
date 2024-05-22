const redclr = document.querySelector("#red");
const greenclr = document.querySelector("#green");
const blueclr = document.querySelector("#blue");
const purpleclr = document.querySelector("#purple");
const blackclr = document.querySelector("#black");
const tomatoclr = document.querySelector("#tomato");


// callback

// function changecolor(heading, color, fontincrese, time, callback){
//     setTimeout(()=>{
//         heading.style.color = color;
//         heading.style.fontSize = fontincrese;
//         if(callback){
//             callback();
//         }
//     }, time);
    
// };



// changecolor(redclr, "red", "30px", 2000, () => {
//     changecolor(greenclr, "green", "30px", 2000, ()=>{
//         changecolor(blueclr, "blue", "30px", 2000, ()=>{
//             changecolor(purpleclr, "purple", "30px", 2000, ()=>{
//                 changecolor(blackclr, "black", "30px", 2000, ()=>{
//                     changecolor(tomatoclr, "tomato", "30px", 2000)
//                 });
//             });
//         });
//     });
// });





// promises


// function changecolor(heading, color, fontincrese, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             heading.style.color = color;
//             heading.style.fontSize = fontincrese;
//             resolve("success");
//         }, time);
//     });
// };

// changecolor(redclr, "red", "30px", 2000).then((res)=>{
//     console.log("red color", res);
//     return changecolor(greenclr, "green", "30px", 2000);
// }).then((res)=>{
//     console.log("green color", res);
//     return changecolor(blueclr, "blue", "30px", 2000);
// }).then((res)=>{
//     console.log("blue color", res);
//     return changecolor(purpleclr, "purple", "30px", 2000);
// }).then((res)=>{
//     console.log("purple color", res);
//     return changecolor(blackclr, "black", "30px", 2000);
// }).then((res)=>{
//     console.log("black color", res);
//     return changecolor(tomatoclr, "tomato", "30px", 2000);
// }).then((res)=>{
//     console.log("tomato color", res);
// });




// async await
function changecolor(heading, color, fontincrese, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            heading.style.color = color;
            heading.style.fontSize = fontincrese;
            resolve("success");
        }, time);
    });
};

async function getdata(){
    await changecolor(redclr, "red", "30px", 2000);
    await changecolor(greenclr, "green", "30px", 2000);
    await changecolor(blueclr, "blue", "30px", 2000);
    await changecolor(purpleclr, "purple", "30px", 2000);
    await changecolor(blackclr, "black", "30px", 2000);
    await changecolor(tomatoclr, "tomato", "30px", 2000);
}

getdata();