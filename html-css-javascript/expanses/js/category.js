class Category {
  constructor(name) {
    this.name = name;
    this.id = Math.random().toString();
  }

  getExpanses() {
    console.group("Category@getExpanses");
    console.log("getExpanses...");
    console.groupEnd();
  }
}

const categoryList = [
  new Category("საოჯახო ტექნიკა"),
  new Category("კომპიუტერული ტექნიკა"),
  new Category("ტელევზორი"),
];
