# good numbers

Receive a list of good or numbers between min and max range.

-   Good numbers are either prime or fibonacci.
-   Great numbers are both prime prime fibonacci.

Pass in `feelingLucky: true` to receive only one number from the range.

## usage

Required parameters:

-   min: number
-   max: number

Optional:

-   onlyGreat: bool
-   feelingLucky: bool

Get Good Numbers:

    const { generateGoodNumbers } = require('./good-numbers')
    const params = {
        min: 10, max: 100, feelingLucky: false, onlyGreat: false,
     }
    const result = generateGoodNumbers(params)
    console.log(result) // [11,13,17,19,21,23]

Great:

    const params = min: 10, max: 10000, feelingLucky: false, onlyGreat: true
    const result = generateGoodNumbers(params) // [13,89,233,1597]

Feeling Lucky:

    const params = min: 0, max: 10000, feelingLucky: true, onlyGreat: false
    const result = generateGoodNumbers(params) // maybe 1823

## tests

-   npm test
