const { generateGoodNumbers } = require("./good-numbers");

function main() {
  const printResult = result => console.log(result);
  const options = {
    min: 0,
    max: 1000,
    feelingLucky: true,
    onlyGreat: false,
  };
  const result = generateGoodNumbers(options);
  return printResult(JSON.stringify(result));
}

// eslint-disable-next-line
main();
