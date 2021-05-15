function expanseFormSubmit(event) {
  event.preventDefault();

  const expanseTitle = document.getElementById("expanseTitle");
  const expanseAmount = document.getElementById("expanseAmount");
  const expanseDate = document.getElementById("expanseDate");

  //   console.log(expanseTitle.value);
  //   console.log(+expanseAmount.value);
  //   console.log(expanseDate.value);

  const newExpanse = Expanse(
    expanseTitle.value,
    +expanseAmount.value,
    expanseDate.value
  );

  newExpanse.logInfo();

  expanseTitle.value = "";
  expanseAmount.value = "";
  expanseDate.value = "";
}

function Expanse(title, amount, date) {
  return {
    title,
    amount,
    date,
    logInfo() {
      console.group("შენი ხარჯი");
      console.log(
        `დასახელება: ${title}. \nთანხა: ${amount} ლარი. \nთარიღი: ${date}. \n`
      );
      console.groupEnd();
    },
  };
}
