const isList = document.querySelector("ul");
const isForm = document.querySelector("form");

let isData = [];
let index = 0;

function handleList() {
  isList.innerHTML = "";

  isData.forEach((data) => {
    const isEntry = `<p>${data.task}</p><div>
         <button id="failure-btn">Delete</button>
        </div>`;
    const li = document.createElement("li");
    li.innerHTML = isEntry;
    isList.appendChild(li);

    // del Btn
    const delBtn = li.querySelector("#failure-btn");
    delBtn.addEventListener("click", () => handleDelete(data.id));
  });
}

function handleDelete(id) {
  isData = isData.filter((data) => data.id !== id);
  handleList();
}

isForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = isForm.querySelector("input").value;
  isData = [...isData, { id: ++index, task: val }];
  handleList(index);
  isForm.querySelector("input").value = "";
});
