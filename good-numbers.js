const {
  add,
  addIndex,
  and,
  compose,
  curry,
  dec,
  equals,
  filter,
  gt,
  gte,
  inc,
  length,
  lte,
  map,
  modulo,
  multiply,
  not,
  or,
} = require("ramda");
const { floor, random } = Math;

const equalsZero = val => equals(val, 0);
const isDivisible = compose(equalsZero, modulo);
const square = n => multiply(n, n);
const squareGreater = (idx, num) => gt(square(idx), num);
const sumGreaterN = (x, y, n) => gt(add(x, y), n);
const sumEqualN = (x, y, n) => equals(add(x, y), n);

const mapIndexed = addIndex(map);
const mapIdx = (x, idx) => idx;
const makeArray = n => Array(n).fill(0);
const fxValOrNah = (condition, fn, arg) => (condition ? fn(arg) : arg);
const equalsDecrementedIdx = (idx, n) => equals(dec(idx), n);
const includeIfTrue = (x, list, fn) => (fn(x) ? [...list, x] : [...list]);
const randomNum = n => floor(random() * n);
const randomFromListLength = compose(randomNum, length);
const getRandomFromList = list => list[randomFromListLength(list)];

const isPrime = (num, idx = 2) => {
  if (lte(num, 2)) return equals(num, 2);
  if (isDivisible(num, idx)) return false;
  if (squareGreater(idx, num)) return true;

  return isPrime(num, inc(idx));
};

const generatePrimes = (limit = 100, primes = [], idx = 0) =>
  equalsDecrementedIdx(idx, limit)
    ? primes
    : generatePrimes(limit, includeIfTrue(idx, primes, isPrime), inc(idx));

const isFibonacci = (num, a = 0, b = 1) => {
  if (!num || !b) return false;
  if (sumGreaterN(a, b, num)) return false;
  if (sumEqualN(a, b, num)) return true;
  return isFibonacci(num, b, add(a, b));
};

const isGreatNumber = num => and(isFibonacci(num), isPrime(num));
const isGoodNumber = num => or(isFibonacci(num), isPrime(num));

/*
 n =>
        n >= min &&
        ((onlyGreat && isGreatNumber(n)) || (!onlyGreat && isGoodNumber(n)))
        */

const onlyGreatN = (onlyGreat, isGreatNumber, n) =>
  onlyGreat && isGreatNumber(n);

const notOnlyGreatButGood = (onlyGreat, isGoodNumber, n) =>
  and(not(onlyGreat), isGoodNumber(n));

const numberFilter = (min, onlyGreat, n) =>
  and(
    gte(n, min),
    or(
      onlyGreatN(onlyGreat, isGreatNumber, n),
      notOnlyGreatButGood(onlyGreat, isGoodNumber, n)
    )
  );
const numberFilterWMinOnlyGreat = curry(numberFilter);

const generateGoodNumbers = ({ min, max, onlyGreat, feelingLucky }) =>
  fxValOrNah(
    feelingLucky,
    getRandomFromList,
    filter(
      numberFilterWMinOnlyGreat(min, onlyGreat),
      mapIndexed(mapIdx, makeArray(max))
    )
  );

// eslint-disable-next-line
module.exports = {
  isPrime,
  generatePrimes,
  generateGoodNumbers,
  isFibonacci,
  isGoodNumber,
  getRandomFromList,
  isGreatNumber,
};
