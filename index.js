let key;
let keys = []
let keies;


const getSign = (event) => {
    key = event.target.value;
    // console.log(key);
    if (key == "" || key == "+" || key == "-" || key == "/" || key == "x") {
        if (keies.includes("x")) {
            multiplication()
        }
        else if (keies.includes("-")) {
            subtraction()
        }
        else if (keies.includes("+")) {
            addition()
        }
        else if (keies.includes("/")) {
            division()
        }
    
    }
    keys.push(key)
    calculatorDisplay()
}

const calculatorDisplay = () => {
    if (key == "C") {
        console.log(key);
        keys = []
    }
    keies = keys.join("");
    console.log(keies);

    console.log(key);    
    let display = document.getElementById("calculator_display");
    display.value = keies
}

// console.log(keies.slice(-1), "sads");
// let news = keies.replace(lastSign, key)
// console.log(news)

const addition = () => {
    let addItem = keies.split("+").map(x => +x);
    let add = addItem.reduce((a, b) => a + b);
    keys = [];
    keys.push(add);
    console.log(keys);
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
    console.log(keies);
    let mulItem = keies.split("x").map(x => +x);
    console.log(mulItem);
    let mul = mulItem.reduce((a, b) => a * b);
    console.log(mul);
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

    // let lastSign = keies.slice(-1)
    // console.log(lastSign);
    // if (lastSign == "x" && key == "-") {
    //         keies.replace(lastSign, key)
    //         console.log("minus");
    //     }