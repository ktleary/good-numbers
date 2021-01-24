function isPrime(num, idx = 2) {
  if (num <= 2) return num === 2;
  if (num % idx === 0) return false;
  if (idx * idx > num) return true;

  return isPrime(num, idx + 1);
}

function generatePrimes(limit = 100, primes = [], idx = 0) {
  if (idx - 1 === limit) return primes;
  const updated = isPrime(idx) ? [...primes, idx] : [...primes];
  return generatePrimes(limit, updated, idx + 1);
}

function isFibonacci(num, a = 0, b = 1) {
  if (a + b > num) return false;
  if (a + b === num) return true;
  return isFibonacci(num, b, a + b);
}

const isGreatNumber = num => isFibonacci(num) && isPrime(num);
const isGoodNumber = num => isFibonacci(num) || isPrime(num);
const getRandomFromArr = arr => arr[Math.floor(Math.random() * arr.length)];

function generateGoodNumbers({
  min,
  max,
  onlyGreat = false,
  feelingLucky = false,
}) {
  if (min > max) return -1;

  const numbers = Array(max)
    .fill(0)
    .map((_, i) => i)
    .filter(
      n =>
        n >= min &&
        ((onlyGreat && isGreatNumber(n)) || (!onlyGreat && isGoodNumber(n)))
    );

  return feelingLucky ? getRandomFromArr(numbers) : numbers;
}

// eslint-disable-next-line
module.exports = {
  isPrime,
  generatePrimes,
  generateGoodNumbers,
  isFibonacci,
  isGoodNumber,
  getRandomFromArr,
  isGreatNumber,
};
