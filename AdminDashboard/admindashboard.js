let index = 0;
const isList = document.querySelector(".list");
const isContent = document.getElementsByClassName("tab-content");
const isTable = document.querySelector(".data-table tbody");
const isLength = document.querySelector(".hasLength");
const isForm = document.querySelector("form");
const isTag = isTable.getElementsByTagName("tr");

isList.addEventListener("click", async (e) => {
  if (e.target.tagName !== "I") return;
  const active = isList.querySelector(".isActive");
  if (active) {
    active.classList.remove("isActive");
  }
  e.target.classList.add("isActive");
  const isTitle = e.target.title;
  for (let i = 0; i < isContent.length; i++) {
    if (isContent[i].dataset.content == isTitle) {
      isContent[i].classList.add("isActive");
      if (isContent[i].dataset.content == "contact") {
        await handleList();
      }
    } else {
      isContent[i].classList.remove("isActive");
    }
  }
});

async function handleList() {
  const isDatabase = await indexedDB.databases();
  const isAvailable = isDatabase.find((elem) => elem.name === "form");

  if (!isAvailable) {
    console.log("Database 'form' doesn't exist");
    return;
  }

  isTable.innerHTML = "";

  const isFactory = indexedDB.open("form");
  isFactory.addEventListener("success", (ev) => {
    const isDb = ev.target.result;
    const hasGetRequest = isDb.transaction("user").objectStore("user").getAll();
    hasGetRequest.addEventListener("success", (eve) => {
      const isResult = eve.target.result;
      isResult.forEach((result) => {
        const isEntry = `<td>${result.id}</td><td>${result.user}</td><td>${result.email}</td>`;
        const isRow = document.createElement("tr");
        isRow.innerHTML = isEntry;
        isTable.appendChild(isRow);
      });
    });
  });
}

isForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = isForm.querySelector("#username").value;
  const email = isForm.querySelector("#email").value;

  const hasFormDatabase = indexedDB.open("form");
  hasFormDatabase.addEventListener("upgradeneeded", (ev) => {
    const hasDatabase = ev.target.result;
    if (!hasDatabase.objectStoreNames.contains("user")) {
      hasDatabase.createObjectStore("user", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  });

  hasFormDatabase.addEventListener("success", async (eve) => {
    const hasSuccess = eve.target.result;
    const isTransaction = hasSuccess.transaction("user", "readwrite");

    await isTransaction.objectStore("user").add({ user, email });

    isTransaction.addEventListener("complete", () => {
      console.log("Transaction has been completed");
      isForm.reset();
    });
  });
  hasFormDatabase.addEventListener("error", (eve) => {
    console.log("Error creating database");
  });
});
