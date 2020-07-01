function isPrime(num) {
  if (num < 3 || num % 2 === 0) return false
  for (let i = 3; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

function generatePrimes(limit) {
  const primes = []
  let i = 0
  while (i < limit) {
    if (isPrime(i)) primes.push(i)
    i++
  }
  return primes
}

function isFibonacci(num, a = 0, b = 1) {
  if (a + b > num) return false
  if (a + b === num) return true
  return isFibonacci(num, b, a + b)
}

const isGreatNumber = num => isFibonacci(num) && isPrime(num)
const isGoodNumber = num => isFibonacci(num) || isPrime(num)
const getRandomFromArr = arr => arr[Math.floor(Math.random() * arr.length)]

function generateGoodNumbers({
  min, max, onlyGreat = false, feelingLucky = false,
}) {
  if (min > max) return -1
  const numbers = []
  let i = min
  while (i <= max) {
    if (onlyGreat && isGreatNumber(i)) numbers.push(i)
    if (!onlyGreat && isGoodNumber(i)) numbers.push(i)
    i++
  }
  if (feelingLucky) { return getRandomFromArr(numbers) }
  return numbers
}

module.exports = {
  isPrime,
  generatePrimes,
  generateGoodNumbers,
  isFibonacci,
  isGoodNumber,
  getRandomFromArr,
  isGreatNumber,
}
