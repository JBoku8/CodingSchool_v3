const usersList = ["user 1", "user 2", "user 3", "user 4"];
const numbers = [3, 4, 5, 45, 8, 10, 45, 45];
printLog("App loaded");

printLog(usersList[0] + " usersList[0]");
printLog(usersList[1] + " usersList[1]");
printLog(usersList[2] + " usersList[2]");

// console.log(usersList[usersList.length - 1]);

// const user1 = "user 1";
// const user2 = "user 2";
// const user3 = "user 3";
// const user4 = "user 4";

usersList[0] = "updated user 1";
// console.log(usersList.length);

const newIndex = usersList.push("user 5");
// console.log(usersList, "newIndex", newIndex);
// const removed = usersList.pop();
// console.log(usersList, "removed", removed);
// LIFO
// FIFO
// FILO

printLog("before userList for loop");
for (let index = 0; index < usersList.length; index++) {
  printLog(usersList[index]);
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 45) {
    numbers[i] = 40;
  }
}

// console.log(`sum - ${sum}`);

printLog("Last Call");

function printLog(message) {
  console.log(message);
  console.log("------------");
}
