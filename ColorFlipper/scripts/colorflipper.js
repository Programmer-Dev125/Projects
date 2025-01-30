const btn = document.querySelector("button");

function handleRandom() {
  return Math.floor(Math.random() * 255);
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${handleRandom()}, ${handleRandom()}, ${handleRandom()})`;
});
