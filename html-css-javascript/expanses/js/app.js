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

const expansesList = [
  new Expanse("სატესტო ხარჯი 1", 20, "2021-05-02"),
  new Expanse("სატესტო ხარჯი 2", 36, "2021-05-01"),
];

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
      expanseDate.value
    );

    expansesList.push(newExpanse);
  } else {
    const elementIndex = expansesList.findIndex((el) => el.id === editItem);
    expansesList[elementIndex].amount = +expanseAmount.value;
    expansesList[elementIndex].title = expanseTitle.value;
    expansesList[elementIndex].date = expanseDate.value;
  }

  renderExpanses();
  emptyForm();
}

function emptyForm() {
  expanseTitle.value = "";
  expanseAmount.value = "";
  expanseDate.value = "";

  isEditing = false;
  editItem = null;
  submitBtn.textContent = textModes[isEditing].submitBtn;
}
function Expanse(title, amount, date) {
  this.title = title;
  this.amount = amount;
  this.date = date;
  this.id = Math.random().toString();
}
Expanse.prototype.logInfo = function () {
  console.log(this);
  console.group("შენი ხარჯი");
  console.log(
    `დასახელება: ${this.title}. \nთანხა: ${this.amount} ლარი. \nთარიღი: ${this.date}. \n`
  );
  console.groupEnd();
};

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
    <button class="btn btn-warning btn-sm" onclick="onExpanseItemEdit(event, '${expanse.id}')">
      <i class="bi bi-pencil"></i>
    </button>
    <button class="btn btn-danger btn-sm" onclick="onExpanseItemDelete(event, '${expanse.id}')">
      <i class="bi bi-trash-fill"></i>
    </button>
   </div>
    <span class="ms-1 badge bg-primary rounded-pill">${expanse.amount} ლარი</span>
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

  isEditing = true;
  editItem = itemId;
  submitBtn.textContent = textModes[isEditing].submitBtn;

  addNewExpanseBtn.click();
}

renderExpanses();

addNewExpanseBtn.onclick = function () {
  expanseFormContainer.removeAttribute("hidden");
  submitBtn.textContent = textModes[isEditing].submitBtn;
};

closeFormBtn.onclick = function () {
  expanseFormContainer.setAttribute("hidden", true);
  emptyForm();
};
