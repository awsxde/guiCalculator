//elements
let zero = document.querySelector(".zero");
let input = document.querySelector(".input");
let btn = document.querySelectorAll(".number");
let preview = document.querySelector(".preview");

//ops
let e = document.querySelector(".e");
let pi = document.querySelector(".pi");
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
let op = document.querySelectorAll(".op");
let rem = document.querySelector(".rem ");
let plus = document.querySelector(".plus");
let sqrt = document.querySelector(".sqrt");
let pow2 = document.querySelector(".pow2");
let sign = document.querySelector(".sign");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let flash = document.querySelectorAll(".flash");
let inverse = document.querySelector(".inverse");
let backspace = document.querySelector(".backspace");
let parentEng1 = document.querySelector(".parentEng1");
let parentEng2 = document.querySelector(".parentEng2");
let displayOps = document.querySelector(".displayOps");
let parenthesis = document.querySelector(".parenthesis");

//variables
let count1 = 0;
let count2 = 0;

//functions
function inputValues() {
  return input.value
    .replace(/[/*-+]/g, "$")
    .split("$")
    .filter((i) => i !== "")
    .map(Number);
}

function operators() {
  return input.value.replace(/\d/g, "").split("");
}

// const dotHandler = (x = nums.length, y = operators.length) => {
//   x === y ?
//   num[num.length - 1]
//   (input.value += !input.value ? "0." : input.value.includes(".") ? "" : ".");
// };

function btnHandler(i) {
  input.value += i.textContent;
  if ([..."*/-+"].some((i) => input.value.includes(i)))
    preview.textContent = eval(input.value);
}

function addToInput(value) {
  input.value += !input.value ? "" : value;
}

function assignToInput(value) {
  input.value = !input.value ? "" : eval(value);
}

function clearFun() {
  input.value = "";
  preview.textContent = "";
}

function equalFun() {
  input.value = eval(input.value);
  preview.textContent = "";
}

function showExtraBtns() {
  ++count1 && count1 % 2
    ? parentEng1.classList.remove("hide")
    : parentEng1.classList.add("hide");
}

function unhide(x, y) {
  x.classList.remove("hide");
  y.classList.add("hide");
}

function flashHandler() {
  ++count2 && count2 % 2
    ? unhide(parentEng2, parentEng1)
    : unhide(parentEng1, parentEng2);
}

function addToInputOp(value) {
  input.value +=
    !input.value || [..."*/+-"].includes(input.value.slice(-1)[0]) ? "" : value;
}

function pt() {
  let count = input.value
    .split("")
    .filter((i) => ["(", ")"].includes(i))
    .reduce((a, b) => a + (b === "(" ? 1 : -1), 0);
  // input.value += !input.value ? "" : "*";
  input.value += count <= 0 ? "(" : ")";
}

function clearPreview() {
  preview.textContent = "";
}

function backspaceHandler() {
  input.value = !input.value ? "" : input.value.slice(0, -1);
  preview.textContent = eval(input.value.slice(0, -1));
}

clear.addEventListener("click", clearFun);
equal.addEventListener("click", equalFun);
parenthesis.addEventListener("click", pt);
displayOps.addEventListener("click", showExtraBtns);
backspace.addEventListener("click", backspaceHandler);
op.forEach((i) => i.addEventListener("click", clearPreview));
flash.forEach((i) => i.addEventListener("click", flashHandler));
btn.forEach((i) => i.addEventListener("click", () => btnHandler(i)));

//one event listener instead of billions
let test = document.querySelectorAll(".test");

test.forEach((i) =>
  i.addEventListener("click", () => {
    inputValues().length === operators().length
      ? (input.value = input.value.slice(0, -1) + i.textContent)
      : addToInputOp(i.textContent);
    // console.log(inputValues(), inputValues().length);
    // console.log(operators(), operators().length);
    // console.log(typeof input.value);
  })
);

function zeroHandler() {
  let arr = inputValues();
  let last = arr.slice(-1)[0];
  console.log(arr, last);
  input.value += last === undefined ? "" : "0";
}

zero.addEventListener("click", zeroHandler);

// div.addEventListener("click", () => addToInput(div.textContent));

// mul.addEventListener("click", () => addToInput(mul.textContent));

// min.addEventListener("click", () => addToInput(min.textContent));

// plus.addEventListener("click", () => addToInput(plus.textContent));

// rem.addEventListener("click", () => assignToInput(input.value / 100));
// rem.addEventListener("click", () => assignToInput(rem.textContent));

// dot.addEventListener("click", dotHandler);

// sqrt.addEventListener("click", () => assignToInput(input.value ** 0.5));

// pow.addEventListener("click", () => addToInput("**"));

// pow2.addEventListener("click", () => addToInput("**2"));

// pi.addEventListener("click", () => addToInput(Math.PI));

// e.addEventListener("click", () => addToInput(Math.E));

// inverse.addEventListener("click", () => assignToInput(1 / input.value));

// sin.addEventListener("click", () => assignToInput(Math.sin(input.value)));

// cos.addEventListener("click", () => assignToInput(Math.cos(input.value)));

// tan.addEventListener("click", () => assignToInput(Math.tan(input.value)));

// ln.addEventListener("click", () => assignToInput(Math.ln(input.value)));

// log.addEventListener("click", () =>
//   assignToInput(Math.log(input.value) / Math.log(10))
// );

// ex.addEventListener("click", () => assignToInput(Math.E ** input.value));

// abs.addEventListener("click", () => assignToInput(Math.abs(input.value)));
