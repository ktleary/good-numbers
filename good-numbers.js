'use strict';

const print = (obj) => console.log(obj)


class GoodNumbers {

    /* the set of good numbers includes  all the primes 
    plus Fibonacci  and their divisors up to the specified limit */

    constructor(limit) {
        this.limit = limit
        this.fibs = this.fib(0, 1, [])
        this.fibsd = this.divisors(this.fibs)
        this.primes = this.primeNumbers()
    }

    isPrime(num) {
        if (num < 3 || num % 2 == 0)
            return false
        for (let i = 3; i < Math.sqrt(num); i++) {
            if (num % i == 0)
                return false
        }
        return true
    }

    primeNumbers() {
        let primes = [],
            i = 0
        while (i < this.limit) {
            if (this.isPrime(i))
                primes.push(i)
            i++
        }
        return primes
    }

    divisor(num) {
        let i = 2,
            divisors = []
        while (i <= num) {
            if (num % i == 0) {
                divisors.push(i)
            }
            i++
        }
        return divisors
    }

    divisors(arr) {
        let arrDivs = []
        arr.forEach(num => {
            arrDivs = arrDivs.concat(this.divisor(num))
        })
        return arrDivs;
    }

    fib(a, b, arr) {
        if (a + b > this.limit)
            return arr
        arr.push(a + b)
        return this.fib(b, a + b, arr)
    }

    sortNumber(a, b) {
        return a - b;
    }

    generate() {
        return Array.from(new Set(this.primes.concat(this.fibsd).sort(this.sortNumber)))
    }
}
const goodNumbers = new GoodNumbers(311)
const result = goodNumbers.generate()
print(result)
/* [2,3,4,5,6,7,8,9,11,12,13,16,17,18,19,21,23,24,25,29,31,34,36,37,41,43,47,48,49,53,55,59,61,67,
71,72,73,79,83,89,97,101,103,107,109,113,121,127,131,137,139,144,149,151,157,163,167,169,173,179,
181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,289,293, 307]
*/
