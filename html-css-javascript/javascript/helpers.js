function logger(message) {
  console.log("%c-----[logger]-----", "color:red;font-size: 20px");

  let logText = message;
  if (typeof message === "object") {
    logText = JSON.stringify(message, null, 2);
  }
  console.log(`%c${logText}`, "color:green; font-size: 20px");
}
