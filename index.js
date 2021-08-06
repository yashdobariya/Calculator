let key;
let storeKeys = [];
let displayValue;


const pressValue = (value) => {
    key = value;
    if (key == "" || key == "+" || key == "-" || key == "/" || key == "x") {
        if (displayValue.includes("x")) {
            multiplication()
        }
        else if (displayValue.includes("-")) {
            subtraction()
        }
        else if (displayValue.includes("+")) {
            addition()
        }
        else if (displayValue.includes("/")) {
            division()
        }
    }
    storeKeys.push(key);
    calculatorDisplay()
}

const calculatorDisplay = () => {
    if (key == "C") {
        console.log(key);
        storeKeys = [];
    }
    displayValue = storeKeys.join("");
    console.log(displayValue);
    console.log(key);    
    let display = document.getElementById("calculator_display");
    display.value = displayValue;
}



const addition = () => {
    console.log(displayValue);
    let addItem = displayValue.split("+").map(x => +x);
    let add = addItem.reduce((a, b) => a + b);
    storeKeys = [];
    storeKeys.push(add);
    console.log(storeKeys);
    console.log("addtion");
}

const subtraction = () => {
    let subItem = displayValue.split("-").map(x => +x);
    let sub = subItem.reduce((a, b) => a - b);
    storeKeys = [];
    storeKeys.push(sub);
    console.log("subtraction");
    
}
const multiplication = () => {
    console.log(displayValue);
    let mulItem = displayValue.split("x").map(x => +x);
    console.log(mulItem);
    let mul = mulItem.reduce((a, b) => a * b);
    console.log(mul);
    storeKeys = [];
    storeKeys.push(mul);
    console.log("multiplication");
    
}
const division = () => {
    let divItem = displayValue.split("/").map(x => +x);
    let divided = divItem.reduce((a, b) => a / b);
    storeKeys = [];
    storeKeys.push(divided);
    console.log("division");
    
}

    // let lastSign = displayValue.slice(-1)
    // console.log(lastSign);
    // if (lastSign == "x" && key == "-") {
    //     console.log(key);
    //     console.log(displayValue);
    //     console.log(typeof (displayValue));
    //     console.log(lastSign);
    //     console.log(key);
    //     displayValue.replace(lastSign, key)
    //     console.log("minus");
    //     console.log(displayValue);
    //     }