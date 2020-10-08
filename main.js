const { generateGoodNumbers } = require('./good-numbers')

function main() {
  const options = {
    min: 0,
    max: 10000,
    feelingLucky: false,
    onlyGreat: true,
  }
  const result = generateGoodNumbers(options)
  console.log(JSON.stringify(result)) // eslint-disable-line no-console
}

main()
