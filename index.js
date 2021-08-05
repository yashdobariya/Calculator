let key;
let keys = []
let keies;

const getSign = (event) => {
    key = event.target.value;
    console.log(key);
    if (key == "=") {
        
        addition()

    } else {
        keys.push(key)
    }
    calculatorDisplay()
}

const calculatorDisplay = () => {
    keies = keys.join("");
    console.log(keies);
    let display = document.getElementById("calculator_display");
    display.value = keies
}

const addition = () => {
    let addItem = keies.split("+").map(x => +x);
    let add = addItem.reduce((a, b) => a + b);
    keys = [];
    keys.push(add);
    console.log("addtion");
}

const subtraction = () => {
    let subItem = keies.split("-").map(x => +x);
    let sub = subItem.reduce((a, b) => a - b);
    keys = [];
    keys.push(sub);
    console.log("subtraction");
    
}
const multiplication = () => {
    let mulItem = keies.split("x").map(x => +x);
    let mul = mulItem.reduce((a, b) => a * b);
    keys = [];
    keys.push(mul);
    console.log("multiplication");
    
}
const division = () => {
    let divItem = keies.split("/").map(x => +x);
    let divided = divItem.reduce((a, b) => a / b);
    keys = [];
    keys.push(divided);
    console.log("division");
    
}

const clear = () => {
    
}


// keies.map(element => {
//     if (element == "+") {
//         addition()
//     }
//     else if (element == "-") {
//         subtraction()
//     }
//     else if (element == "x") {
//         multiplication()
//     }
//     else if (element == "/") {
//         division()
//     }
// });