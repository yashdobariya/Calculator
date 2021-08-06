let key;
let displayValue;
let display = document.getElementById("calculator_display");

enterValue = () => {
    displayValue = display.value
    console.log(displayValue);
}

const pressValue = (value) => {
    key = value;
    
    if (key == "" || key == "+" || key == "-" || key == "/" || key == "x") {
        if (displayValue.includes("x")) {
            console.log(displayValue);
            let checkMulItems = displayValue.split("x")
            if (!checkMulItems[1] == "") {
                multiplication()
                console.log("call");
            }
        }
        else if (displayValue.includes("-")) {
            let checkSubItems = displayValue.split("-")
            if (!checkSubItems[1] == "") {
                    console.log("call");
                subtraction()
                }
        }
        else if (displayValue.includes("+")) {
            let checkAddItems = displayValue.split("+")
            if (!checkAddItems[1] == "") {
                    console.log("call");
                addition()
            }
        }
        else if (displayValue.includes("/")) {
            console.log(displayValue);
            let checkDivItems = displayValue.split("/")
            console.log(checkDivItems);
            if (!checkDivItems[1] == "") {
                    console.log("call");
                division()
                }
        }
    }
    console.log(displayValue);
    calculatorDisplay()
}

const calculatorDisplay = () => {
    if (key == "C") {
        key = ""
        displayValue = ""
    }
    if (displayValue == null) {
        displayValue = ""
    }
    displayValue = displayValue + key
    // console.log(displayValue.toString());
    // console.log(displayValue);
    // console.log(lastSign);
    let lastSign = displayValue.slice(-1)
    if (lastSign == key) {
        console.log("call");
        console.log(displayValue.length);
        console.log(lastSign);
        let data =  displayValue.slice(-1) + key
        console.log(data);
        display.value = displayValue; 
    }
    display.value = displayValue; 
}


const addition = () => {
    console.log(displayValue);
    let addItem = displayValue.split("+").map(x => +x);
    console.log(addItem);
    let add = addItem.reduce((a, b) => a + b);
        displayValue = ""
        displayValue = add
        console.log("addtion");
        
}

const subtraction = () => {
    let subItem = displayValue.split("-").map(x => +x);
    let sub = subItem.reduce((a, b) => a - b);
    displayValue = "";
    displayValue = sub;
    console.log("subtraction");
    
}
const multiplication = () => {
    // console.log(displayValue);
    // let lastSign = displayValue.slice(-1)
    // console.log(lastSign);
    // if (lastSign == "x" && key == "-") {
    //    let data =  displayValue.replace(lastSign, key)
    //     console.log(data);
    // }
    let mulItem = displayValue.split("x").map(x => +x);
    let mul = mulItem.reduce((a, b) => a * b);
    displayValue = "";
    displayValue = mul;
    console.log(displayValue);
    console.log("multiplication");
    
}
const division = () => {
    let divItem = displayValue.split("/").map(x => +x);
    let divided = divItem.reduce((a, b) => a / b);
    displayValue = "";
    displayValue = divided;
    console.log("division");
    
}
