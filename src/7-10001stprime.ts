import * as R from 'ramda';

import {isPrime} from "./3-Largestprimefactor";

function primeAfter(x : number) {
    while (true) {
        if (isPrime(x)) {
            return x;
        }
        x += 1;
    }
}

function xthPrimeNumber(x : number) : number {
    var primeCount = 0;
    let nextNumberToConsider = 1;
    while (primeCount <= x)  {
        nextNumberToConsider = primeAfter(nextNumberToConsider) + 1;
        primeCount += 1;
    }
    return nextNumberToConsider - 1;
}

console.log(xthPrimeNumber(10001));