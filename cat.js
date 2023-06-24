const fs = require("fs");
const done = require("./bash");

const cat = (done, fileName) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      done(err);
    } else {
      done(data);
    }
  });
};

module.exports = cat;
