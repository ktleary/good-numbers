/* eslint-disable */
const assert = require('assert');

const {
  isPrime,
  generatePrimes,
  isFibonacci,
  isGoodNumber,
  isGreatNumber,
  luckyNumber,
  generateGoodNumbers,
  getRandomFromList,
} = require('../good-numbers');

describe('Prime and Fibonacci Numbers', () => {
  describe('Prime Numbers', () => {
    it('should be true for 13', () => {
      assert.equal(true, isPrime(13));
    });
    it('should be false for 222', () => {
      assert.equal(false, isPrime(222));
    });
    it('should be false for -13', () => {
      assert.equal(false, isPrime(-13));
    });
    it('should generate the sequence 3, 5, 7 ...', () => {
      const primesUnder100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      const result = generatePrimes(30);
      assert.deepEqual(primesUnder100, result);
    });
  });
  describe('Fibonacci number', () => {
    it('should be true for 21', () => {
      assert.equal(true, isFibonacci(21));
    });
    it('should be false for 23', () => {
      assert.equal(false, isFibonacci(23));
    });
  });
  describe('Test Good and Great Numbers', () => {
    it('should show 29 is a goodNumber', () => {
      assert.equal(true, isGoodNumber(21));
    });
    it('should show 250 is not a goodNumber', () => {
      assert.equal(false, isGoodNumber(250));
    });
    it('should show 13 is a greatNumber', () => {
      assert.equal(true, isGreatNumber(13));
    });
    it('should show 8 is not greatNumber', () => {
      assert.equal(false, isGreatNumber(8));
    });
    it('should show 0 is neither a good nor great number', () => {
      assert.equal(true, !isGreatNumber(0) && !isGoodNumber(0));
    });
  });
  describe('Test random from Array', () => {
    it('should return one number', () => {
      const arr = [2, 4, 6, 8];
      const result = getRandomFromList(arr);
      assert.equal(true, typeof result === 'number' && arr.includes(result));
    });
    it('should return one of one numbers', () => {
      const arr = [2];
      const result = getRandomFromList(arr);
      assert.equal(true, typeof result === 'number' && arr.includes(result));
    });
  });
  describe('Test Good Number Generation', () => {
    it('should return all good numbers below 25', () => {
      const goodUnder25 = [1, 2, 3, 5, 7, 8, 11, 13, 17, 19, 21, 23];
      const options = {
        min: 0,
        max: 25,
      };
      assert.deepEqual(goodUnder25, generateGoodNumbers(options));
    });
    it('should return all greatNumbers numbers below 10,000', () => {
      const greatUnder100k = [2, 3, 5, 13, 89, 233, 1597];
      const options = {
        min: 1,
        max: 10000,
        onlyGreat: true,
      };
      assert.deepEqual(greatUnder100k, generateGoodNumbers(options));
    });
    it('should return all goodNumbers numbers between 500 and 550', () => {
      const greatUnder100k = [503, 509, 521, 523, 541, 547];
      const options = {
        min: 500,
        max: 550,
        onlyGreat: false,
        feelingLucky: false,
      };
      assert.deepEqual(greatUnder100k, generateGoodNumbers(options));
    });
    it('should return one goodNumber numbers between 500 and 2000', () => {
      const options = {
        min: 500,
        max: 2000,
        onlyGreat: false,
        feelingLucky: true,
      };
      const result = generateGoodNumbers(options);
      assert.equal(true, isGoodNumber(result));
    });
    it('should return one greatNumber number between 500 and 2000', () => {
      const options = {
        min: 500,
        max: 2000,
        onlyGreat: true,
        feelingLucky: true,
      };
      const result = generateGoodNumbers(options);
      assert.equal(true, isGreatNumber(result));
    });
    it('should return [] if min is greater than max', () => {
      const options = {
        min: 100,
        max: 10,
      };
      assert.deepEqual([], generateGoodNumbers(options));
    });
    it('should return [] if no options are supplied', () => {
      const options = {};
      assert.deepEqual([], generateGoodNumbers(options));
    });
  });
});
