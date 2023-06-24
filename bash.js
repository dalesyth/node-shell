const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

// Output a prompt
process.stdout.write("prompt > ");

const done = (output) => {
  process.stdout.write(output);

  process.stdout.write("\nprompt > ");
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const [cmd, arg] = data.toString().trim().split(" ");

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd === "cat") {
    cat(done, arg);
  } else if (cmd === "curl") {
    curl(done, arg);
  }
});

module.exports = done;
