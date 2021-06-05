const parentElement = document.getElementById("expansesList");
const totalExpanse = document.getElementById("totalExpanse");
const averageExpanse = document.getElementById("averageExpanse");
const expanseFormContainer = document.getElementById("expanseFormContainer");
const addNewExpanseBtn = document.getElementById("addNewExpanse");
const closeFormBtn = document.getElementById("closeFormBtn");
const submitBtn = document.getElementById("submitBtn");

const expanseTitle = document.getElementById("expanseTitle");
const expanseAmount = document.getElementById("expanseAmount");
const expanseDate = document.getElementById("expanseDate");
const expanseCategory = document.getElementById("expanseCategory");

let isEditing = false;
let editItem = null;

const textModes = {
  [false]: {
    submitBtn: "ხარჯის შექმნა",
  },
  [true]: {
    submitBtn: "განახლება",
  },
};

function expanseFormSubmit(event) {
  event.preventDefault();

  if (!isEditing) {
    const newExpanse = new Expanse(
      expanseTitle.value,
      +expanseAmount.value,
      expanseDate.value,
      expanseCategory.value
    );

    expansesList.push(newExpanse);
  } else {
    const elementIndex = expansesList.findIndex((el) => el.id === editItem);
    expansesList[elementIndex].amount = +expanseAmount.value;
    expansesList[elementIndex].title = expanseTitle.value;
    expansesList[elementIndex].date = expanseDate.value;
    expansesList[elementIndex].categoryId = expanseCategory.value;
  }

  renderExpanses();
  emptyForm();
}

function emptyForm() {
  expanseTitle.value = "";
  expanseAmount.value = "";
  expanseDate.value = "";
  expanseCategory.selectedIndex = 0;

  isEditing = false;
  editItem = null;
  submitBtn.textContent = textModes[isEditing].submitBtn;
}

function expanseItemTemplate(expanse) {
  return `
  <li
    class="
      list-group-item
      d-flex
      justify-content-between
      align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${expanse.title}</div>
      ${expanse.date}
    </div>
   <div class="btn-group">
    <button class="btn btn-warning btn-sm" onclick="onExpanseItemEdit(event, '${
      expanse.id
    }')">
      <i class="bi bi-pencil"></i>
    </button>
    <button class="btn btn-danger btn-sm" onclick="onExpanseItemDelete(event, '${
      expanse.id
    }')">
      <i class="bi bi-trash-fill"></i>
    </button>
   </div>
   <span class="ms-1 badge bg-success rounded-pill">${
     expanse.getCategory().name
   }</span>
    <span class="ms-1 badge bg-primary rounded-pill">${
      expanse.amount
    } ლარი</span>
  </li>
  `;
}

function onExpanseItemDelete(event, itemId) {
  event.stopPropagation();
  const index = expansesList.findIndex((el) => el.id === itemId);
  expansesList.splice(index, 1);
  renderExpanses();
}

function onExpanseItemEdit(event, itemId) {
  event.stopPropagation();
  const element = expansesList.find((el) => el.id === itemId);

  expanseTitle.value = element.title;
  expanseAmount.value = element.amount;
  expanseDate.value = element.date;
  expanseCategory.value = element.categoryId;

  isEditing = true;
  editItem = itemId;
  submitBtn.textContent = textModes[isEditing].submitBtn;

  addNewExpanseBtn.click();
}

function renderExpanses() {
  parentElement.innerHTML = null;
  let total = 0;
  for (let i = expansesList.length - 1; i >= 0; i--) {
    parentElement.innerHTML += expanseItemTemplate(expansesList[i]);
    total += expansesList[i].amount;
  }
  totalExpanse.textContent = `${total} ლარი.`;

  const average = total ? Math.round(total / expansesList.length) : 0;

  averageExpanse.textContent = `${average} ლარი.`;

  localStorage.setItem(EXPANSE_KEY, JSON.stringify(expansesList));
}

function renderCategoryOptions() {
  categoryList.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.text = category.name;

    expanseCategory.appendChild(option);
  });
}

renderExpanses();
renderCategoryOptions();

addNewExpanseBtn.onclick = function () {
  expanseFormContainer.removeAttribute("hidden");
  submitBtn.textContent = textModes[isEditing].submitBtn;
};

closeFormBtn.onclick = function () {
  expanseFormContainer.setAttribute("hidden", true);
  emptyForm();
};
