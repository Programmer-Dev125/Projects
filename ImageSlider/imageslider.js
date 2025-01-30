const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const isImg = document.getElementsByTagName("img");
let index = 2;
nextBtn.addEventListener("click", () => {
  if (index === isImg.length - 1 || index == isImg.length - 3) {
    return;
  }
  index++;
  isImg[index].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
  console.log(index);
  console.log(isImg[index]);
});
prevBtn.addEventListener("click", () => {
  if (index == 1) {
    index = 2;
    return;
  }
  index--;
  isImg[index].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
  console.log(index);
  console.log(isImg[index]);
});
