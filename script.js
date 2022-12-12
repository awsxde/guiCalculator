//elements
let zero = document.querySelector(".zero");
let input = document.querySelector(".input");
let btn = document.querySelectorAll(".number");
let preview = document.querySelector(".preview");

//ops
let e = document.querySelector(".e");
let pi = document.querySelector(".pi");
let op = document.querySelectorAll(".op");
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
// let flash = document.querySelector(".flash");
let inverse = document.querySelector(".inverse");
let backspace = document.querySelector(".backspace");
let parentEng1 = document.querySelector(".parentEng1");
let parentEng2 = document.querySelector(".parentEng2");
let displayOps = document.querySelector(".displayOps");

//variables
let count1 = 0;
// let count2 = 0;

let nums = input.value
  .replace(/[%/*-+]/g, "$")
  .split("$")
  .filter((i) => i !== "")
  .map(Number);

let operators = input.value.replace(/\d/g, "").split("");

console.log(nums);
console.log(operators);

// input.value = "2%+1*2";

//bad way
// operators = operators
//   .map(function (i, index) {
//     if (i === "%") nums[index] /= 100;
//     return i;
//   })
//   .filter((i) => i !== "%");

// console.log(nums[nums.length - 1]);

// equal.addEventListener("click", () => assignToInput(input.value));

equal.addEventListener("click", () => {
  // preview.textContent = eval(input.value.replace(/%/g, "/100"));
  input.value = eval(input.value);
  preview.textContent = "";
});

// const dotHandler = (x = nums.length, y = operators.length) => {
//   x === y ?
//   num[num.length - 1]
//   (input.value += !input.value ? "0." : input.value.includes(".") ? "" : ".");
// };

//functions
btn.forEach((i) =>
  i.addEventListener("click", () => {
    input.value += i.textContent;
    if ([..."/*-+"].some((i) => input.value.includes(i)))
      preview.textContent = eval(input.value);
  })
);

const addToInput = (value) => (input.value += !input.value ? "" : value);

const assignToInput = (value) =>
  (input.value = !input.value ? "" : eval(value));

const clearFun = () => {
  input.value = "";
  preview.textContent = "";
};

const showExtraBtns = () =>
  ++count1 && count1 % 2
    ? parentEng1.classList.remove("hide")
    : parentEng1.classList.add("hide");

// let count1 = 0;
let count2 = 0;

let flash = document.querySelectorAll(".flash");

function handle(x, y) {
  x.classList.remove("hide");
  y.classList.add("hide");
}

flash.forEach((i) =>
  i.addEventListener("click", () => {
    ++count2 && count2 % 2
      ? handle(parentEng2, parentEng1)
      : handle(parentEng1, parentEng2);
  })
);

div.addEventListener("click", () => addToInput(div.textContent));

mul.addEventListener("click", () => addToInput(mul.textContent));

min.addEventListener("click", () => addToInput(min.textContent));

plus.addEventListener("click", () => addToInput(plus.textContent));

rem.addEventListener("click", () => assignToInput(input.value / 100));
// rem.addEventListener("click", () => assignToInput(rem.textContent));

// dot.addEventListener("click", dotHandler);

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

op.forEach((i) =>
  i.addEventListener("click", () => {
    preview.textContent = "";
  })
);
