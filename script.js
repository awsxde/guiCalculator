let btn = document.querySelectorAll(".number");
let input = document.querySelector(".input");
let clear = document.querySelector(".clear");
let dot = document.querySelector(".dot");
let sqrt = document.querySelector(".sqrt");

//to num btns can work
Array.from({ length: btn.length }, (_, i) => i).map((i) =>
  btn[i].addEventListener("click", () => (input.value += btn[i].textContent))
);

//clear btn
clear.addEventListener("click", () => {
  input.value = "";
});

//sqrt btn
sqrt.addEventListener("click", () => {
  input.value = input.value ** 0.5;
});

// dot.addEventListener("click", () => {
//   input.value += dot.textContent;
// });
