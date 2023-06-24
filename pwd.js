const done = require("./bash");

const pwd = (done) => {
  done(process.cwd());
};

module.exports = pwd;
