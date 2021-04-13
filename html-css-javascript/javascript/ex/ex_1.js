const confirmRegistration = confirm("გსურთ თუ არა რეგისტრაცია?");

if (confirmRegistration) {
  // დაადასტურა
  const firstName = prompt("სახელი?: ");
  const lastName = prompt("გვარი?: ");
  const email = prompt("ელ.ფოსტა?: ");

  const message = `${firstName} ${lastName}, თქვენ წარამტებით დარეგისტრირდით.\nთქვენი ელ.ფოსტა - ${email}`;

  alert(message);
} else {
  // არ დაადასტურა
  alert("თქვენ უარი განაცხადეთ რეგისტრაციაზე :(");
}
