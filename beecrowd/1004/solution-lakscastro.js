const input = require("fs").readFileSync("/dev/stdin", "utf8");

function prod() {
  const lines = input.split("\n");
  const a = Number(lines.shift());
  const b = Number(lines.shift());

  return a * b;
}

const mensagem = `PROD = ${prod()}`;
console.log(mensagem);

module.exports = prod;
