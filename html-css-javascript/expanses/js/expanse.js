const EXPANSE_KEY = 'EXPANSE_STORAGE';

class Expanse {
  constructor(title, amount, date, categoryId) {
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.categoryId = categoryId;
    this.id = Math.random().toString();
  }
  logInfo() {
    console.log(this);
    console.group('შენი ხარჯი');
    console.log(
      `დასახელება: ${this.title}. \nთანხა: ${this.amount} ლარი. \nთარიღი: ${this.date}. \n`
    );
    console.groupEnd();
  }
  getCategory() {
    return categoryList.find((c) => c.id === this.categoryId);
  }
}

let expansesList = [];

if (localStorage.getItem(EXPANSE_KEY)) {
  const readData = JSON.parse(localStorage.getItem(EXPANSE_KEY));
  expansesList = readData.map(
    (item) => new Expanse(item.title, item.amount, item.date, item.categoryId)
  );
} else {
  expansesList = [
    new Expanse('სატესტო ხარჯი 1', 20, '2021-05-02', categoryList[0].id),
    new Expanse('სატესტო ხარჯი 2', 36, '2021-05-01', categoryList[1].id),
  ];
  console.log(expansesList);
  localStorage.setItem(EXPANSE_KEY, JSON.stringify(expansesList));
}
