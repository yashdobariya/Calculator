let keys = []
let keies;
// let keies = keys.join()
    
const getSign = (event) => {
    key = event.target.value;
    console.log(key);
    if (key == "x" || key == "-" || key == "+" || key == "/" || key ==  "C") {
        // console.log(key);
        // console.log(typeof(key));
        keys.push(key)
        // console.log("run")
        // console.log(keys.push(typeof(parseInt(key))));

    } else if (key == "=") {
        // keys.push(key)
    console.log("barabar")

    addition()
    }
    else {
        // console.log(key);
        keys.push(key)
        // console.log(typeof(key));
        // console.log("run")
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
    let addItem = keies.split("+").map(x=>+x)
    console.log(typeof(data[0]));
    let add = addItem.reduce((a, b) => a + b);
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