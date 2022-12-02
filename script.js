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
let sqrt = document.querySelector(".sqrt");
let pow = document.querySelector(".pow");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
// let op = document.querySelector(".op");

//event listener for nums
Array.from({ length: btn.length }, (_, i) => i).map((i) =>
  btn[i].addEventListener("click", () => (input.value += btn[i].textContent))
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
  input.value += input.value === "" ? "" : rem.textContent;
});

// sqrt.addEventListener("click", () => {
//   input.value = input.value ** 0.5;
// });

// pow.addEventListener("click", () => {
//   input.value += " " + pow.textContent + " ";
// });

dot.addEventListener("click", () => {
  input.value +=
    input.value === ""
      ? "0" + dot.textContent
      : input.value.includes(".")
      ? ""
      : dot.textContent;
});

equal.addEventListener("click", () => {
  input.value = input.value === "" ? "" : eval(input.value);
});

clear.addEventListener("click", () => {
  input.value = "";
});

// op.addEventListener("click", () => {
//   input.value += input.value === "" ? "" : op.textContent;
// });

zero.addEventListener("click", () => {
  input.value += input.value === "" ? "" : zero.textContent;
});
