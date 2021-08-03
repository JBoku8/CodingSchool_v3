const CATEGORY_KEY = 'CATEGORY_STORAGE';
class Category {
  constructor(name) {
    this.name = name;
    this.id = Math.random().toString();
  }

  getExpanses() {
    console.group('Category@getExpanses');
    console.log('getExpanses...');
    console.groupEnd();
  }
}

let categoryList = [];

if (localStorage.getItem(CATEGORY_KEY)) {
  const readData = JSON.parse(localStorage.getItem(CATEGORY_KEY));
  categoryList = [...readData];
} else {
  categoryList = [
    new Category('საოჯახო ტექნიკა'),
    new Category('კომპიუტერული ტექნიკა'),
    new Category('ტელევზორი'),
  ];
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(categoryList));
}
