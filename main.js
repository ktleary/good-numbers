const { generateGoodNumbers } = require("./good-numbers");

function main() {
  const writeLn = content => console.log(content);
  const options = {
    min: 1,
    max: 10,
    feelingLucky: true,
    onlyGreat: false,
  };

  return writeLn(generateGoodNumbers(options));
}

/* eslint-disable fp/no-unused-expression */
main();
