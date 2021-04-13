/**
 * ==, ===, > , <, >= , <=
 * || , && , !
 */

const x = 14;
const y = 20;
const z = 18;

// console.log(`${x} > ${y}`, x > y);
// console.log(`${x} < ${y}`, x < y);
// console.log(`${x} <= ${y}`, x <= y);
// console.log(`${x} >= ${y}`, x >= y);

// const text = "ვარ ქართველი";
// const name = `'მე, ${text}, მაშასადმე მე ვარ ევროპელი.'`;
// console.log(name);

// if (x > y) {
//   console.log(`${x} > ${y}`, x > y);
// } else {
//   console.log(`${x} < ${y}`, x < y);
// }

!(x > y) ? console.log("FIRST") : console.log("SECOND");

// პირობა ? მოქმედება_true : მოქმედება_false

if (x > y && x > z) {
  console.log("X");
} else if (y > x && y > z) {
  console.log("Y");
} else if (z > x && z > y) {
  console.log("Z");
}

// editor, admin, moderator

const userRole = "editor";

// if (userRole === "editor" || userRole === "moderator") {
//   console.log("limited access");
// } else if (userRole === "admin") {
//   console.log("full access");
// } else {
//   console.log("Access denied");
// }

switch (userRole) {
  case "editor":
  case "moderator":
    console.log("limited access");
    break;

  case "admin":
    console.log("full access");
    break;

  default:
    console.log("Access denied");
}
