let keys = []
let keies;
// let keies = keys.join()
    
const getSign = (event) => {
    key = event.target.value;
    console.log(key);
    if (key === "=") {
        console.log("barabar")
        addition()
    } else {
        keys.push(parseInt(key))
    }
    // console.log(keys);
    calculatorDisplay()
}

const calculatorDisplay = () => {
    keies = keys.join("");
    let display = document.getElementById("calculator_display");
    display.value = keies
}

const addition = () => {
    let data = keies.split("+")
    console.log(data);
    let add = data.reduce((a, b) => a + b);
    console.log(add);
    keys = []
    keys.push(add)
    console.log(add);
    
}
const subtraction = () => {
    
}
const multiplication = () => {
    
}
const division = () => {
    
}

const clear = () => {
    
}