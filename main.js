const { generateGoodNumbers } = require('./good-numbers')

function main() {
  const options = {
    min: 900, max: 950, onlyLucky: false, onlyGreat: false,
  }
  const result = generateGoodNumbers(options)
  console.log(JSON.stringify(result)) // eslint-disable-line no-console
}

main()
