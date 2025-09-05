const fs = require("fs");

function person(name, callbackFn) {
  console.log(`hello ${name}`);
  callbackFn();
}
function address() {
  console.log("srlanka");
}

person("Hiraan", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading File ${err}`);
    return;
  }
  console.log(data);
});
