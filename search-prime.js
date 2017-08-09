'use strict';
const print = (obj) => console.log(obj)

class Util {
    getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max - min))
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
    getPrimesFromArray(arr) {
        let arrPrime = []
        arr.forEach(num => {
            if (this.isPrime(num)) {
                arrPrime.push(num)
            }
        })
        return arrPrime
    }
    randomArray(size, min, max) {
        let i = 0,
            num = 0,
            arr = []
        while (i < size) {
            num = this.getRandomNumber(min, max)
            arr.push(num)
            i = i + 1
        }
        return arr
    }
}


class ClosestPrime {

    constructor(spaceSize, lower, upper, target) {
        this.spaceSize = spaceSize
        this.lower = lower
        this.upper = upper
        this.target = target
        this.util = new Util()
        this.arrRandom = this.util.randomArray(this.spaceSize, this.lower, this.upper)
        this.arrPrime = this.util.getPrimesFromArray(this.arrRandom)
    }


    search() {
        let dist = Infinity
        let closest = -1
        let thisDist = Infinity
        this.arrPrime.forEach(num => {
            thisDist = Math.abs(this.target - num)
            if (thisDist < dist) {
                closest = num
                dist = thisDist
                print([closest, dist])
            }
        })
        return { closest, dist }
    }
}

const space = 997
const lower = 13
const upper = 19870
const target = 5150


const closestPrime = new ClosestPrime(space, lower, upper, target)
const results = closestPrime.search()
print(`Closest to target: ${target} is ${results.closest} at distance of ${results.dist}!`)

