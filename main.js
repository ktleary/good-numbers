const { generateGoodNumbers } = require("./good-numbers");

function main() {
  const writeLn = content => console.log(content);
  const options = {
    min: 500,
    max: 10000,
    feelingLucky: true,
    onlyGreat: true,
  };

  return writeLn(generateGoodNumbers(options));
}

/* eslint-disable fp/no-unused-expression */
main();
