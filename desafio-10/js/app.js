const btn9 = document.querySelector(".btn9");
const btn8 = document.querySelector(".btn8");
const btn7 = document.querySelector(".btn7");
const btn6 = document.querySelector(".btn6");
const btn5 = document.querySelector(".btn5");
const btn4 = document.querySelector(".btn4");
const btn3 = document.querySelector(".btn3");
const btn2 = document.querySelector(".btn2");
const btn1 = document.querySelector(".btn1");
const btn0 = document.querySelector(".btn0");
const btnC = document.querySelector(".btnC");
const btnCR = document.querySelector(".btnCR");
const btnMult = document.querySelector(".btnMultiplication");
const btnDiv = document.querySelector(".btnDivision");
const btnSum = document.querySelector(".btnSum");
const btnSubtraction = document.querySelector(".btnSubtraction");
const btnEqual = document.querySelector(".btnEqual");

let operation = document.querySelector(".operation");
let result = document.querySelector(".result");

btn9.onclick = () => { operation.value += "9" };
btn8.onclick = () => { operation.value += "8" };
btn7.onclick = () => { operation.value += "7" };
btn6.onclick = () => { operation.value += "6" };
btn5.onclick = () => { operation.value += "5" };
btn4.onclick = () => { operation.value += "4" };
btn3.onclick = () => { operation.value += "3" };
btn2.onclick = () => { operation.value += "2" };
btn1.onclick = () => { operation.value += "1" };
btn0.onclick = () => {
    if (operation.value != "") {
        operation.value += "0"
    }
}

btnMult.onclick = () => { operation.value += "*" };
btnDiv.onclick = () => { operation.value += "/" };
btnSum.onclick = () => { operation.value += "+" };
btnSubtraction.onclick = () => { operation.value += "-" };

btnEqual.onclick = () => { result.value = eval(operation.value)};

btnC.onclick = () => { operation.value = operation.value.substring(0, operation.value.length - 1);}
btnCR.onclick = () => { (operation.value = "")(result.value = "") }











