const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const resBtn = document.getElementById("reset");
const output = document.querySelector("h3");
let index = 0;

function handleIncrease() {
  index++;
  output.innerText = index;
}
function handleDecrease() {
  index--;
  output.innerText = index;
}
function handleReset() {
  index = 0;
  output.innerText = index;
}

incBtn.addEventListener("click", handleIncrease);
decBtn.addEventListener("click", handleDecrease);
resBtn.addEventListener("click", handleReset);
