const fs = require("fs");
const done = require("./bash");

const ls = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err);
    } else {
      done(files.join("\n"));
    }
  });
};

module.exports = ls;
