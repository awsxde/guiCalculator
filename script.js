//elements
let zero = document.querySelector(".zero");
let input = document.querySelector(".input");
let btn = document.querySelectorAll(".number");
let answer = document.querySelector(".answer");

//ops
let e = document.querySelector(".e");
let pi = document.querySelector(".pi");
let op = document.querySelector(".op");
let ln = document.querySelector(".ln");
let ex = document.querySelector(".ex");
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let min = document.querySelector(".min");
let dot = document.querySelector(".dot");
let pow = document.querySelector(".pow");
let rad = document.querySelector(".rad");
let sin = document.querySelector(".sin");
let cos = document.querySelector(".cos");
let tan = document.querySelector(".tan");
let log = document.querySelector(".log");
let abs = document.querySelector(".abs");
let rem = document.querySelector(".rem ");
let plus = document.querySelector(".plus");
let sqrt = document.querySelector(".sqrt");
let pow2 = document.querySelector(".pow2");
let sign = document.querySelector(".sign");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let inverse = document.querySelector(".inverse");
let flash = document.querySelector(".flash");

//event listener for nums
btn.forEach((i) =>
  i.addEventListener("click", () => (input.value += i.textContent))
);

div.addEventListener("click", () => {
  input.value += input.value === "" ? "" : div.textContent;
});

mul.addEventListener("click", () => {
  input.value += input.value === "" ? "" : mul.textContent;
});

min.addEventListener("click", () => {
  input.value += input.value === "" ? "" : min.textContent;
});

plus.addEventListener("click", () => {
  input.value += input.value === "" ? "" : plus.textContent;
});

rem.addEventListener("click", () => {
  input.value = input.value === "" ? "" : input.value / 100;
});

dot.addEventListener("click", () => {
  input.value += !input.value ? "0." : input.value.includes(".") ? "" : ".";
});

equal.addEventListener("click", () => {
  // console.log([...input.value].map(Number).includes(NaN));
  // [...input.value].map(Number).includes(NaN) ? "Error" :
  input.value = input.value === "" ? "" : eval(input.value);
});

clear.addEventListener("click", () => {
  input.value = "";
});

zero.addEventListener("click", () => {
  input.value += input.value ? "0" : "";
});

let pushToHistory = () => {
  input.value != "" && history.push(Number(input.value));
  input.value = "";
};

let showHistory = () =>
  (answer.textContent = history.reduce((a, b) => a + b, ""));

let showAnswer = () => (answer.textContent = eval(answer.textContent));

let equalArray = (str = "") => {
  history.map((i) => (str += i));
  history = [eval(str)];
};

let displayOps = document.querySelector(".displayOps");

let parentEng = document.querySelector(".parentEng");

let count = 0;

parentEng.classList.remove("hide");

displayOps.addEventListener("click", () => {
  count++;
  count % 2
    ? parentEng.classList.remove("hide")
    : parentEng.classList.add("hide");
});

sqrt.addEventListener("click", () => {
  input.value = input.value ** 0.5;
});

pow.addEventListener("click", () => {
  input.value += "**";
});

pow2.addEventListener("click", () => {
  input.value = input.value ** 2;
});

pi.addEventListener("click", () => {
  input.value += Math.PI;
});

e.addEventListener("click", () => {
  input.value += Math.E;
});

inverse.addEventListener("click", () => {
  input.value = 1 / input.value;
});

sin.addEventListener("click", () => {
  input.value = Math.sin(input.value);
});

cos.addEventListener("click", () => {
  input.value = Math.cos(input.value);
});

tan.addEventListener("click", () => {
  input.value = Math.tan(input.value);
});

ln.addEventListener("click", () => {
  input.value = Math.log(input.value);
});

log.addEventListener("click", () => {
  input.value = Math.log(input.value) / Math.log(10);
});

ex.addEventListener("click", () => {
  input.value = Math.E ** input.value;
});

abs.addEventListener("click", () => {
  input.value = Math.abs(input.value);
});

// let op = document.querySelector(".op");

// op.addEventListener("click", () => {
//   input.value += input.value === "" ? "" : op.textContent;
// });

//ascii codes for
// 0 = 48
// 9 = 57

// let preview = document.querySelector(".preview");

// input.addEventListener("input", (e) => {
//   let x = e.target.value;
//   preview.innerHTML = !(47 < x.charCodeAt() && x.charCodeAt() < 58) ? x : "";
// });
