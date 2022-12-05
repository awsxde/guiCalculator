//elements
let btn = document.querySelectorAll(".number");
let input = document.querySelector(".input");
let zero = document.querySelector(".zero");

//ops
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let min = document.querySelector(".min");
let plus = document.querySelector(".plus");
let rem = document.querySelector(".rem ");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let sqrt = document.querySelector(".sqrt");
let pow = document.querySelector(".pow");
let pow2 = document.querySelector(".pow2");
let pi = document.querySelector(".pi");
let e = document.querySelector(".e");
let inverse = document.querySelector(".inverse");

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
  input.value += input.value === "" ? "" : zero.textContent;
});

let displayOps = document.querySelector(".displayOps");

let parentEng = document.querySelector(".parentEng");

let count = 0;

// parentEng.classList.remove("hide");

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
