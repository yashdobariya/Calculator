let operator;
let displayValue;
let display = document.getElementById("calculator_display");

enterValue = () => {
  displayValue = display.value;
};

const pressValue = (value) => {
  operator = value;
  if (
    operator == "=" ||
    operator == "+" ||
    operator == "-" ||
    operator == "/" ||
    operator == "x"
  ) {
    if (displayValue.length >= 1) {
      let lastSign = displayValue.slice(-1);
      if (
        lastSign == "x" ||
        lastSign == "-" ||
        lastSign == "+" ||
        lastSign == "/"
      ) {
        displayValue = displayValue.substring(0, displayValue.length - 1);
      }
    }

    const sign = displayValue.includes("x")
      ? "x"
      : displayValue.includes("+")
      ? "+"
      : displayValue.includes("-")
      ? "-"
      : "/";

    switch (sign) {
      case "x":
        let checkMulItems = displayValue.split("x");
        if (!checkMulItems[1] == "") {
          multiplication();
        }
        break;
      case "-":
        let checkSubItems = displayValue.split("-");
        if (!checkSubItems[1] == "") {
          subtraction();
        }
        break;
      case "+":
        let checkAddItems = displayValue.split("+");
        if (!checkAddItems[1] == "") {
          addition();
        }
        break;
      case "/":
        let checkDivItems = displayValue.split("/");
        if (!checkDivItems[1] == "") {
          division();
        }
        break;
    }
  }
  calculatorDisplay();
};

const calculatorDisplay = () => {
  if (operator == "C") {
    operator = "";
    displayValue = "";
  } else if (operator == "=") {
    operator = "";
  }
  if (displayValue == null) {
    displayValue = "";
  }
  displayValue = displayValue + operator;
  display.value = displayValue;
};

const addition = () => {
  let addItem = displayValue.split("+").map((x) => +x);
  let add = addItem.reduce((a, b) => a + b);
  displayValue = "";
  displayValue = add;
};

const subtraction = () => {
  let subItem = displayValue.split("-").map((x) => +x);
  let sub = subItem.reduce((a, b) => a - b);
  displayValue = "";
  displayValue = sub;
};

const multiplication = () => {
  let mulItem = displayValue.split("x").map((x) => +x);
  let mul = mulItem.reduce((a, b) => a * b);
  displayValue = "";
  displayValue = mul;
};

const division = () => {
  let divItem = displayValue.split("/").map((x) => +x);
  console.log(divItem);
  let divided = divItem.reduce((a, b) => a / b);
  displayValue = "";
  displayValue = divided;
};
