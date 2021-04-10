const confirmation = confirm("ვეთანხმები პირობებს");

const okActionMessage = "მომხმარებელი დაეთანხმა პირობებს!...";
const cancelActionMessage = "არ დაეთანხმა პირობებს!...";

if (confirmation) {
  console.log(okActionMessage);
  const redColor = "tomato";
  const greenColor = "seagreen";
  const blueColor = "cadetblue";
  const defaultColor = "white";

  //   '', "", ``

  const result = prompt(
    `აირჩიეთ ფერი:\n${redColor}, ${greenColor}, ${blueColor}`,
    defaultColor
  );

  if (result === redColor) {
    document.body.style.backgroundColor = result;
  } else if (result === greenColor) {
    document.body.style.backgroundColor = result;
  } else if (result === blueColor) {
    document.body.style.backgroundColor = result;
  } else {
    document.body.style.backgroundColor = defaultColor;
  }

  const x = 10;
  if (x > 40) {
    console.log("x > 40");
  } else if (x > 23) {
    console.log("x > 23");
  } else {
    console.log("ELSE 1");
  }

  //   if (x > 23) {
  //     console.log("x > 23");
  //   } else {
  //     console.log("ELSE 2");
  //   }
} else {
  console.log(cancelActionMessage);
}
