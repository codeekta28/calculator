console.log("This is a calculator");
const outputValue = document.querySelector("#outputValue");
const buttons = document.querySelectorAll(".btn"); 
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

buttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
     let btnValue = e.target.dataset.num;
     outputValue.value+= btnValue;
    })
})
equalBtn.addEventListener("click",(e)=>{
    if(outputValue.value===""){
        outputValue.value=`Please input some number`;
        setTimeout(() => {
            
        }, timeout);
    }else{
        let result = eval(outputValue.value);
        outputValue.value = result;
    }

})
clearBtn.addEventListener("click",(e)=>{
    outputValue.value = "";
})















































// buttons.forEach(function (button) {
//     button.addEventListener("click", (e) => {
//         let btnNumber = e.target.dataset.num;
//         console.log(typeof(btnNumber));
//         outputValue.value += btnNumber;
//     })
// })
// btnEqual.addEventListener("click", () => {
//     console.log("equal btn clicked")
//     if (outputValue.value == "") {
//         outputValue.value = "Please enter the value"
//     } else {
//         let answer = eval(outputValue.value);
//         console.log("answer type",typeof(answer));
//         outputValue.value = answer;
//     }
// })
// btnClear.addEventListener("click", () => {
//     outputValue.value = "";
// })