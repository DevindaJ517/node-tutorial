const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file ", err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  fs.writeFile("uoutput.txt", modifyFileData, (err) => {
    if (err) {
      console.error("Erro", err);
      return;
    }
    fs.readFile("uoutput.txt", "utf8", (err, data) => {
      if (err) {
        console.error("error", err);
        return;
      }
      console.log(data);
    });
  });
});
