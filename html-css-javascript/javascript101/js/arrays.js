const arr = new Array(10);
const numbers = [1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log("number - ", numbers[i]);
// }

// for (let value of numbers) {
//   console.log(value);
// }

const users = [
  { name: "name 1" },
  { name: "name 2" },
  { name: "name 3" },
  { name: "name 4" },
];

// numbers.forEach((element) => {
//   console.log("number - ", element);
// });

// users.forEach((element, index, arr) => {
//   console.log("username is", element.name);
//   console.log(index, arr);
// });

// function forEach(masivi, cbFunction) {
//   for (let i = 0; i < masivi.length; i++) {
//     cbFunction(masivi[i], i, masivi);
//   }
// }

// const masivisFn = (element, index, arr) => {
//   console.log(element, index, arr);
// };

// forEach(numbers, masivisFn);

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;

const even = numbers.filter(isEven);
const odd = numbers.filter(isOdd);

// console.log(even);
// console.log(odd);

// let global = "i am a global variable";
// {
//   let global = "i am a local variable";
//   console.log(global);
// };
// fn();
// console.log(global);

// console.log(global);

// var global = "I am a var global";

// function isolateVar() {
//   var global = "I am a var local";
//   var global = "I am a second var local";

//     function f())

//   console.log(global);
// }
// isolateVar();
// console.log(global);

// var - function scoped
// let/const = block scoped = {}

let POST_INDEX = 1;
class Post {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = POST_INDEX++;
  }
  format() {
    console.log(`${this.title} - ${this.author} ${this.id}`);
  }
}

// getting values from form inputs

const blogPost = new Post("javascript hard parts", "Douglas Crockford");
const blogPost2 = new Post("ydnjs", "Kyle Simpson");
const blogPost3 = new Post("ydnjs", "Kyle Simpson");

// blogPost.title = "javascript essentials";
// blogPost.author = "Douglas Crockford";

// function formatBlog(blog) {
//   console.log(`${blog.title} - ${blog.author}`);
// }

// formatBlog(blogPost);
// formatBlog(blogPost2);
blogPost.format();
blogPost2.format();
