//elements
let btn = document.querySelectorAll(".number");
let input = document.querySelector(".input");
let zero = document.querySelector(".zero");
let answer = document.querySelector(".answer");

//ops
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let min = document.querySelector(".min");
let plus = document.querySelector(".plus");
let rem = document.querySelector(".rem ");
let sqrt = document.querySelector(".sqrt");
let pow = document.querySelector(".pow");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let sign = document.querySelector(".sign");
let op = document.querySelector(".op");

//variables
let history = [];
// let i = 0;
// let j = 0;
// let activeNumber;

// functions

let clearFun = () => (input.value = "");

let pushToHistory = () =>
  input.value != "" && history.push(+input.value) && clearFun();

let showHistory = () => {
  answer.textContent = history.reduce((a, b) => a + b, "");
};

let showAnswer = () => {
  answer.textContent = eval(history.reduce((a, b) => a + b, ""));
};

let equalArray = () => {
  history = [eval(history.reduce((a, b) => a + b, ""))];
};

let ifValid = () =>
  typeof history[history.length - 1] == "number" &&
  history[history.length - 1] !== ("+" || "-" || "*" || "/" || "");

// let resetI = () => (i = 0);

//event listener for nums
btn.forEach((i) =>
  i.addEventListener("click", () => (input.value += i.textContent))
);

zero.addEventListener("click", () => {
  input.value += input.value ? "0" : "";
});

function factor() {
  pushToHistory();
  showHistory();
  equalArray();
  showAnswer();
}

const handel = (str) => {
  factor();
  ifValid() && history.push(`${str}`) && showHistory();
};

// event listener for operators
plus.addEventListener("click", () => handel("+"));

min.addEventListener("click", () => handel("-"));

mul.addEventListener("click", () => handel("*"));

div.addEventListener("click", () => handel("/"));

equal.addEventListener("click", () => factor());

clear.addEventListener("click", () => {
  input.value = "";
  history = [];
  answer.textContent = "";
});

dot.addEventListener("click", () => {
  input.value += !input.value ? "0." : input.value.includes(".") ? "" : ".";
});

sign.addEventListener("click", () => {
  input.value ? (input.value *= -1) : (history[0] *= -1);
  showHistory();
  showAnswer();
});

rem.addEventListener("click", () => {
  input.value ? (input.value /= 100) : (history[0] /= 100);
  showHistory();
  showAnswer();
});

// const handel2 = (sign, num) => {
//   input.value
//     ? (input.value = eval(+`${input.value}${sign}${num}`))
//     : (history[0] = eval(+`${history[0]}${sign}${num}`));
//   showHistory();
//   showAnswer();
// };

// sign.addEventListener("click", () => handel2("*", -1));

// rem.addEventListener("click", () => handel2("/", 100));
