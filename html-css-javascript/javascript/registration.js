/**
 *
 * სახელი
 * გვარი
 * ასაკი
 * დაბადების წელი
 * როლი
 * პაროლი
 */

const CLIENTS_DB = [];

const defaultUser = Client({
  fName: "Spider",
  lName: "Man",
});

defaultUser.getFullInfo();

function Client({
  bDay = null,
  lName,
  role = "guest",
  password = null,
  age = 0,
  fName,
}) {
  // MODEL
  const errors = [];
  if (!fName) {
    errors.push("First name is required");
  }
  if (!lName) {
    errors.push("Last name is required");
  }

  if (errors.length > 0) {
    throw Error(errors.join("\n"));
  }

  return {
    fName: fName,
    lName: lName,
    age: age,
    bDay: bDay,
    role: role,
    password: password,
    getFullInfo() {
      logger(`${fName} ${lName}`);
    },
  };
}

function registerUser(defaultValues = {}) {
  const fName = prompt("fName", defaultValues.fName);
  const lName = prompt("lName", defaultValues.lName);
  const age = prompt("age", defaultValues.age);
  const bDay = prompt("bDay", defaultValues.bDay);
  const role = prompt("role", defaultValues.role);
  const password = prompt("password", defaultValues.password);

  try {
    const client = Client({ password, fName, lName, age, role, bDay });
    client.getFullInfo();
    //   logger(client);
    CLIENTS_DB.push(client);
  } catch (error) {
    alert(error.message);

    // registerUser({ fName, lName, age, bDay, role, password });
  }
}
