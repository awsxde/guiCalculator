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

let oprators = document.querySelector(".oprators");

let engs = document.querySelectorAll(".eng");

let count = 0;

oprators.addEventListener("click", () => {
  count++;
  engs.forEach((i) =>
    count % 2 ? i.classList.add("hide") : i.classList.remove("hide")
  );
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

// let sqrt = document.querySelector(".sqrt");

// sqrt.addEventListener("click", () => {
//   input.value = input.value ** 0.5;
// });

// let pow = document.querySelector(".pow");

// pow.addEventListener("click", () => {
//   input.value += " " + pow.textContent + " ";
// });
