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
let flash = document.querySelector(".flash");
let inverse = document.querySelector(".inverse");
let backspace = document.querySelector(".backspace");
let parentEng = document.querySelector(".parentEng");
let displayOps = document.querySelector(".displayOps");

//variables
let count = 0;

//functions
btn.forEach((i) =>
  i.addEventListener("click", () => (input.value += i.textContent))
);

const addToInput = (value) => (input.value += !input.value ? "" : value);

const assignToInput = (value) =>
  (input.value = !input.value ? "" : eval(value));

const dotHandler = () =>
  (input.value += !input.value ? "0." : input.value.includes(".") ? "" : ".");

const clearFun = () => (input.value = "");

const showExtraBtns = () =>
  ++count && count % 2
    ? parentEng.classList.remove("hide")
    : parentEng.classList.add("hide");

div.addEventListener("click", () => addToInput(div.textContent));

mul.addEventListener("click", () => addToInput(mul.textContent));

min.addEventListener("click", () => addToInput(min.textContent));

plus.addEventListener("click", () => addToInput(plus.textContent));

rem.addEventListener("click", () => assignToInput(input.value / 100));

dot.addEventListener("click", dotHandler);

equal.addEventListener("click", () => assignToInput(input.value));

clear.addEventListener("click", clearFun);

// zero.addEventListener("click", () => {
//   input.value += input.value === "" ? "" : "0";
// });

displayOps.addEventListener("click", showExtraBtns);

sqrt.addEventListener("click", () => assignToInput(input.value ** 0.5));

pow.addEventListener("click", () => addToInput("**"));

pow2.addEventListener("click", () => addToInput("**2"));

pi.addEventListener("click", () => addToInput(Math.PI));

e.addEventListener("click", () => addToInput(Math.E));

inverse.addEventListener("click", () => assignToInput(1 / input.value));

sin.addEventListener("click", () => assignToInput(Math.sin(input.value)));

cos.addEventListener("click", () => assignToInput(Math.cos(input.value)));

tan.addEventListener("click", () => assignToInput(Math.tan(input.value)));

ln.addEventListener("click", () => assignToInput(Math.ln(input.value)));

log.addEventListener("click", () =>
  assignToInput(Math.log(input.value) / Math.log(10))
);

ex.addEventListener("click", () => assignToInput(Math.E ** input.value));

abs.addEventListener("click", () => assignToInput(Math.abs(input.value)));

backspace.addEventListener("click", () => {
  input.value = !input.value ? "" : input.value.slice(0, -1);
});
