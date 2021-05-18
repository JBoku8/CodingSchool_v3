const parentElement = document.getElementById("expansesList");
const totalExpanse = document.getElementById("totalExpanse");
const averageExpanse = document.getElementById("averageExpanse");

const expansesList = [
  new Expanse("სატესტო ხარჯი 1", 20, "2021-05-02"),
  new Expanse("სატესტო ხარჯი 2", 36, "2021-05-01"),
];

function expanseFormSubmit(event) {
  event.preventDefault();

  const expanseTitle = document.getElementById("expanseTitle");
  const expanseAmount = document.getElementById("expanseAmount");
  const expanseDate = document.getElementById("expanseDate");

  const newExpanse = new Expanse(
    expanseTitle.value,
    +expanseAmount.value,
    expanseDate.value
  );

  expansesList.push(newExpanse);
  renderExpanses();

  expanseTitle.value = "";
  expanseAmount.value = "";
  expanseDate.value = "";
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
      align-items-start
    "
    onclick="onExpanseItemClick('${expanse.id}')"
  >
    <div class="ms-2 me-auto">
      <div class="fw-bold">${expanse.title}</div>
      ${expanse.date}
    </div>
    <button class="btn btn-danger btn-sm" onclick="onExpanseItemDelete(event, '${expanse.id}')">
      <i class="bi bi-trash-fill"></i>
    </button>
    <span class="ms-1 badge bg-primary rounded-pill">${expanse.amount} ლარი</span>
  </li>
  `;
}

function onExpanseItemClick(itemId) {
  const item = expansesList.find((el) => el.id === itemId);
  console.group("onExpanseItemClick");
  console.log("expanse item clicked");
  console.log(item);
  console.groupEnd();
}

function onExpanseItemDelete(event, itemId) {
  event.stopPropagation();
  const index = expansesList.findIndex((el) => el.id === itemId);
  expansesList.splice(index, 1);
  renderExpanses();
}

renderExpanses();
