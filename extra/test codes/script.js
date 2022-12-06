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
let i = 0;
let j = 0;
let activeNumber;

// functions
let pushToHistory = () => {
  input.value != "" && history.push(Number(input.value));
  input.value = "";
};

let showHistory = () => {
  answer.textContent = history.reduce((a, b) => a + b, "");
};

let showAnswer = () => {
  answer.textContent = eval(answer.textContent);
};

let equalArray = (str = "") => {
  history.map((i) => (str += i));
  history = [eval(str)];
};

let ifValid = () =>
  typeof history[history.length - 1] == "number" &&
  history[history.length - 1] !== ("+" || "-" || "*" || "/" || "");

let resetI = () => (i = 0);

//event listener for nums
btn.forEach((i) =>
  i.addEventListener("click", () => (input.value += i.textContent))
);

zero.addEventListener("click", () => {
  input.value += input.value ? "0" : "";
});

function handel() {
  pushToHistory();
  showHistory();
  equalArray();
  showAnswer();
}

// event listener for operators
plus.addEventListener("click", () => {
  handel();
  ifValid() && history.push("+") && showHistory();
});

min.addEventListener("click", () => {
  handel();
  ifValid() && history.push("-") && showHistory();
});

mul.addEventListener("click", () => {
  handel();
  ifValid() && history.push("*") && showHistory();
});

div.addEventListener("click", () => {
  handel();
  ifValid() && history.push("/") && showHistory();
});

equal.addEventListener("click", () => handel());

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
