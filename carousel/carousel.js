const img = document.querySelectorAll("#container img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let index = 0;
nextBtn.addEventListener("click", () => {
  img[index].className = "tohide";
  index++;
  if (index === img.length) {
    index = 0;
  }
  img[index].className = "toshow";
});

prevBtn.addEventListener("click", () => {
  img[index].className = "tohide";
  index--;
  if (index < 0) {
    index = img.length - 1;
  }
  img[index].className = "toshow";
});
