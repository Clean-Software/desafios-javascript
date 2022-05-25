var input = require("fs").readFileSync("/dev/stdin", "utf8");

function sum() {
  var lines = input.split("\n");
  let A = parseInt(lines.shift());
  let B = parseInt(lines.shift());

  return A + B;
}

console.log(`SOMA = ${sum()}`);

module.exports = sum;
