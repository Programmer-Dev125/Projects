const head = document.querySelector(".heading");
const hasText = document.querySelectorAll(".txt");
const isImage = document.querySelectorAll("img");
head.addEventListener("click", (e) => {
  if (e.target.tagName == "DIV") return;
  const active = head.querySelector(".isActive");
  if (active) {
    active.classList.remove("isActive");
  }
  e.target.classList.add("isActive");
  let category = e.target.dataset.category;
  hasText.forEach((text) => {
    text.classList.toggle("isActive", text.dataset.category == category);
  });
  isImage.forEach((img) => {
    img.classList.toggle("toShow", img.dataset.id == category);
  });
});
