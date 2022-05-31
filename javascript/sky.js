
// var count = 0;

// function clickMe() {
//     count++;
//     let paraArea = document.getElementById("counter")
//     // print in html / on web
//     paraArea.innerText = count;
//     // print in js
//     console.log(count)
// }


// function btnClick($event) {


//     let valueOfName = document.getElementById('name')
//     console.log(valueOfName.value)

//     if (valueOfName.value == "") {
//         console.log("Empty textbox")
//         alert("empty")
//     }
//     else {
//         console.log(valueOfName.value)
//     }
// }

// // for addition
// let btnCalculate = document.getElementById('btnCalculate');
// console.log(btnCalculate);
// // btnCalc.addEventListener('click', calculation);
// btnCalculate.onclick = calculation();
// function calculation() {
//     let value1 = document.getElementById('value1').value;
//     let value2 = document.getElementById('value2').value;
//     console.log(typeof (value1));
//     console.log(typeof (value2));


//     console.log(" Now changing data type of value1: " + typeof parseInt(value1));
//     console.log(value1 + value2);

//     // chaning String to int
//     let addition = parseInt(value1) + parseInt(value2);

//     let ansPlace = document.getElementById('ans')
//     ansPlace.value = addition;
// }




// hiding button more than 5 clicks

var clickCount = 1;

function countMe() {
    console.log(clickCount)
    // debugger
    let msg = "YOur click: " + clickCount;
    if (clickCount > 5) {

        let btnClick = document.getElementById("btnClick");
        btnClick.setAttribute('disabled', true);



        // setTimeout(()=>{
        //     btnClick.removeAttribute('disabled');
        // }, 1000 * 5);

        return;
    }

    document.getElementById('showCount').innerText = msg;

    clickCount++;
}


console.log("----------------------------------");
var val = "sth passed"
newFun(val, (parameter) => {

    console.log(parameter);
}) {
    fn(val);
}