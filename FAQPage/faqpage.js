const toClick = document.querySelectorAll(".icon");
const isCard = document.querySelectorAll(".card");
let isActive = false;

for (let i = 0; i < toClick.length; i++) {
  toClick[i].addEventListener("click", () => {
    for (let j = 0; j < isCard.length; j++) {
      if (j !== i) {
        isCard[j].classList.remove("toShow");
        continue;
      }
      isCard[j].classList.toggle("toShow");
    }
  });
}
